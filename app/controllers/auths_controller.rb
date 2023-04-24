# class AuthsController < ApplicationController
#   # skip_before_action :authorize, only: [:create]

#   def create
#     user = User.find_by(email: params[:email]) || User.find_by(username: params[:username])
#     admin = Admin.find_by(email: params[:email]) || Admin.find_by(username: params[:username])

#     if user && user.authenticate(params[:password])
#       token = encode_token({ user_id: user.id })
#       render json: { loggedin: true, user: user.as_json(only: [:id, :name]), jwt: token }, status: :accepted
#     elsif admin && admin.authenticate(params[:password])
#       token = encode_token({ admin_id: admin.id })
#       render json: { loggedin: true, admin: admin.as_json(only: [:id, :name]), jwt: token }, status: :accepted
#     else
#       render json: { error: 'Invalid email/username or password' }, status: :unauthorized
#     end
#   end

#   def destroy
#     cookies.delete(:jwt_token)
#     render json: { message: 'Logged out successfully' }
#   end

#   private

#   def session_params
#     params.permit(:username, :password)
#   end
#   # def session_params
#   #   params.permit(:email, :username, :password)
#   # end
# end

class AuthsController < ApplicationController
  # skip_before_action :authorize, only: [:create]

  def create
    user = User.find_by(email: params[:email]) || User.find_by(username: params[:username])
    admin = Admin.find_by(email: params[:email]) || Admin.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      token = encode_token({ user_id: user.id })
      session[:jwt_token] = token # Store the token in the session
      render json: { loggedin: true, user: user.as_json(only: [:id, :name]), jwt: token }, status: :accepted
    elsif admin && admin.authenticate(params[:password])
      token = encode_token({ admin_id: admin.id })
      session[:jwt_token] = token # Store the token in the session
      render json: { loggedin: true, admin: admin.as_json(only: [:id, :name]), jwt: token }, status: :accepted
    else
      render json: { error: 'Invalid email/username or password' }, status: :unauthorized
    end
  end

  def destroy
    session.delete(:jwt_token) # Remove the token from the session
    render json: { message: 'Logged out successfully' }
  end

  def auto_login
    @token = params[:token]
    user = User.find(JWT.decode(@token, "put your secret password here", true, algorithm: 'HS256')[0]["user_id"])
    render json: user
  end

  private

  def session_params
    params.permit(:username, :password)
  end
end
