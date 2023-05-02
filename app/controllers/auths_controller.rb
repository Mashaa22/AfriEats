# class AuthsController < ApplicationController
#   # before_action :authorized, except: [:create, :auto_login]

#   def create
#     @user = User.find_by(username: user_login_params[:username])
#     @admin = Admin.find_by(username: user_login_params[:username])
 
#     if @user && @user.authenticate(user_login_params[:password])
#       @token = encode_token({ user_id: @user.id })
#       render json: { 
#         entity: 'user',
#         user: UserSerializer.new(@user), 
#         jwt: @token 
#       }, status: :accepted   
#     elsif @admin && @admin.authenticate(user_login_params[:password])
#       @token = encode_token({ admin_id: @admin.id })
#       render json: { 
#         entity: 'admin',
#         admin: AdminSerializer.new(@admin), 
#         jwt: @token 
#       }, status: :accepted   
#     else
#       render json: { message: 'Invalid username or password' }, status: :unauthorized
#     end
    
#   end

#   def auto_login
#     @token = params[:@token]
#     begin
#       decoded_token = JWT.decode(@token, "my_s3cr3t", true, algorithm: 'HS256')
#       if user_id = decoded_token[0]["user_id"]
#         user = User.find(user_id)
#         render json: { 
#           entity: 'user',
#           user: user, 
#           jwt: @token,
#           user_id: user.id
#         }
#       elsif admin_id = decoded_token[0]["admin_id"]
#         admin = Admin.find(admin_id)
#         render json: { 
#           entity: 'admin',
#           admin: admin, 
#           jwt: @token,
#           admin_id: admin.id
#         }
#       else
#         render json: { message: 'Invalid token' }, status: :unauthorized
#       end 
#     rescue JWT::DecodeError
#       render json: { message: 'Invalid token' }, status: :unauthorized
#     end
#   end

#   private

#   def user_login_params
#     params.permit(:username, :password, :pin)
#   end
  
#   def encode_token(payload)
#     JWT.encode(payload, "my_s3cr3t", 'HS256')
#   end
# end
class AuthsController < ApplicationController
  # before_action :authorized, except: [:create, :auto_login]

  def create
    @user = User.find_by(username: user_login_params[:username])
    @admin = Admin.find_by(username: user_login_params[:username])
 
    if @user&.authenticate(user_login_params[:password])
      @token = encode_token({ user_id: @user.id })
      render json: { 
        entity: 'user',
        user: UserSerializer.new(@user), 
        jwt: @token 
      }, status: :accepted   
    elsif @admin&.authenticate(user_login_params[:password])
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
    @token = params[:token]
    begin
      decoded_token = JWT.decode(@token, "my_s3cr3t", true, algorithm: 'HS256')
      if decoded_token[0]["user_id"]
        user = User.find(decoded_token[0]["user_id"])
        render json: { 
          entity: 'user',
          user: user, 
          jwt: @token,
          user_id: user.id,
        }
      elsif decoded_token[0]["admin_id"]
        admin = Admin.find(decoded_token[0]["admin_id"])
        render json: { 
          entity: 'admin',
          admin: admin, 
          jwt: @token,
          admin_id: admin.id,
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
    params.permit(:username, :password, :pin)
  end
  
  def encode_token(payload)
    JWT.encode(payload, "my_s3cr3t", 'HS256')
  end
end

