require 'sinatra'
require 'erb'

class CatFeederApp < Sinatra::Base

  set :static, true
  set :root, CatFeederApp.root
  set :public_folder, File.join(APP_DIR, 'public')
  set :views, File.join(APP_DIR, 'views')

  get "/" do
    erb :index
  end

end
