require 'bcrypt'

class LoginController < ApplicationController
skip_before_action :verify_authenticity_token
def index
    render html:"LOGIN PAGE"
end

def create
    u = User.find_by('email': params[:email])
if u.nil?
    render json: "USER ACCOUNT DOES NOT exist"
else
    if u.authenticate(params[:password])
        session[:current_user_id] = u.id
        render json: "LOGGED IN SUCCESSFULLY"
    else
        render json: "AUTHENTICATION FAILED"
    end
end
end

def destroy
    session.delete(:current_user_id)
    render json: "LOGGED OUT SUCCESSFULLY"
end
 
end
