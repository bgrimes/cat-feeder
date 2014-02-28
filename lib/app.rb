require 'sinatra'

class CatFeederApp < Sinatra::Base

  set :static, true
  set :root, CatFeederApp.root
  set :public_folder, File.join(APP_DIR, 'public')

  get "/" do
    send_file File.join(APP_DIR, 'public/index.html')
  end



end
