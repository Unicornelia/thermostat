require 'sinatra/base'

class Thermostat < Sinatra::Base

  enable :sessions
  register Sinatra::Flash
  use Rack::MethodOverride

  get '/' do
    erb :index
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
