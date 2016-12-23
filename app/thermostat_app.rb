require 'sinatra/base'

class Thermostat < Sinatra::Base

  enable :sessions
  use Rack::MethodOverride

  get '/' do
    erb :index
  end

  get '/about' do
    erb :about
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
