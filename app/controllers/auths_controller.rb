class AuthsController < ApplicationController
  # before_action :authorized, except: [:create, :auto_login]

  def create
    @user = User.find_by(username: user_login_params[:username])
    @admin = Admin.find_by(username: user_login_params[:username])
 
    if @user && @user.authenticate(user_login_params[:password])
      @token = encode_token({ user_id: @user.id })
      render json: { 
        entity: 'user',
        user: UserSerializer.new(@user), 
        jwt: @token 
      }, status: :accepted   
    elsif @admin && @admin.authenticate(user_login_params[:password])
      @token = encode_token({ admin_id: @admin.id })
      render json: { 
        entity: 'admin',
        admin: AdminSerializer.new(@admin), 
        jwt: @token 
      }, status: :accepted   
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
    
  end

  def auto_login
    token = params[:token]
    begin
      decoded_token = JWT.decode(token, "put your secret password here", true, algorithm: 'HS256')
      if user_id = decoded_token[0]["user_id"]
        user = User.find(user_id)
        render json: { 
          entity: 'user',
          user: UserSerializer.new(user), 
          jwt: token
        }
      elsif admin_id = decoded_token[0]["admin_id"]
        admin = Admin.find(admin_id)
        render json: { 
          entity: 'admin',
          admin: AdminSerializer.new(admin), 
          jwt: token
        }
      else
        render json: { message: 'Invalid token' }, status: :unauthorized
      end 
    rescue JWT::DecodeError
      render json: { message: 'Invalid token' }, status: :unauthorized
    end
  end
  

  private

  def user_login_params
    params.permit(:username, :password)
  end
end

