require 'sinatra'
require 'sinatra/activerecord'
require 'erb'
require 'app_config'
require 'rack-flash'
require 'omniauth'
require 'omniauth-google-oauth2'
require 'ostruct'

require 'auth_user'

require "cat_feeder_authentication"
require "cat_feeder_helpers"
require "cat_feeder_sinatra"

Time.zone = "UTC"
ActiveRecord::Base.default_timezone = :utc

set :database, ENV["DATABASE_URL"]

class CatFeederApp < Sinatra::Base

  include CatFeeder::Authentication

  register Sinatra::ActiveRecordExtension
  register Sinatra::GetOrPost

  set :static, true
  set :root, CatFeederApp.root
  set :public_folder, File.join(APP_DIR, 'public')
  set :views, File.join(APP_DIR, 'views')

  # SESSIONS!
  use Rack::Session::Cookie, {  key: "rack.session",
                                path: "/",
                                expire_after: 2592000,
                                secret: ENV["SESSION_SECRET"],
                              }

  use Rack::Flash, :sweep => true

  # Use Developer strategies when in development
  if ENV["RACK_ENV"] == "development"
    use OmniAuth::Strategies::Developer
  else
    use OmniAuth::Builder do
      provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_SECRET"],
               { name: "google", access_type: "online" }
    end
  end

  helpers do
    include CatFeeder::Helpers
  end

  before do
    authentication_required!
  end

  get "/" do
    #puts settings.auth_emails.to_s
    erb :index
  end

  get "/login" do
    @oauth_path = ENV["RACK_ENV"] == "development" ? "/auth/developer" : "/auth/google"
    erb :login
  end

  get "/logout" do
    session.clear
    redirect "/"
  end


  get_or_post "/auth/:name/callback" do
    session.clear
    auth_hash = request.env["omniauth.auth"]

    user = AuthUser.find_or_create_by_omniauth(auth_hash)
    if user && user.valid?
      puts "We have user #{user.id}"
      session[:user_id] = user.id

      redirect "/"
    else
      puts "We did NOT find or create a user!!"
      session[:user_id] = nil
      error_str = 'Unable to authenticate.'

      user.errors.full_messages.each do |msg|
        error_str += "\n#{msg}"
      end
      flash[:error] = error_str
      redirect "/login"
    end
  end
end
