require 'bcrypt'
class UserController < ApplicationController
skip_before_action :verify_authenticity_token
def index
# current_user = User.find_by_id(session[:current_user_id])
# render json:current_user
v = User.all
render json:v
end     

def show
v = User.find(params[:id])
render json:v
end    

def create
v = !params[:name].empty? && !params[:email].empty? and params[:address].empty? and !params[:password].empty? and !params[:phone_number].empty? and !params[:role_id].nil?
puts v
if v
u = User.create('name': params[:name], 'email': params[:email],'address': params[:address],'password': params[:password],'phone_number': params[:phone_number],'role_id': params[:role_id],'reset_password_sent_at': params[:reset_password_sent_at],'reset_pass': params[:reset_pass])
else
render json: "DATA NOT SENT"
end
end

def update
b = User.exists?(params[:id])
if b
u = User.find(params[:id])
u.update('password': params[:password],'reset_pass': params[:reset_pass])
end
end

end
