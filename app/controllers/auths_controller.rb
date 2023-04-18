# class AuthsController < ApplicationController
# skip_before_action :authorize, only: [:create]

# def create
#   user = User.find_by(email: params[:email])
#   admin = Admin.find_by(email: params[:email])

#   if user && user.authenticate(params[:password])
#     token = encode_token({ user_id: user.id })
#     render json: { loggedin: true, user: user.as_json(only: [:id, :name]), jwt: token }, status: :accepted
#   elsif admin && admin.authenticate(params[:password])
#     token = encode_token({ admin_id: admin.id })
#     render json: { loggedin: true, admin: admin.as_json(only: [:id, :name]), jwt: token }, status: :accepted
#   else
#     render json: { error: 'Invalid email or password' }, status: :unauthorized
#   end
# end

# def destroy
#   cookies.delete(:jwt_token)
#   render json: { message: 'Logged out successfully' }
# end

# private

# def session_params
#   params.permit(:email, :password)
# end
# end
class AuthsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    user = User.find_by(email: params[:email]) || User.find_by(username: params[:username])
    admin = Admin.find_by(email: params[:email]) || Admin.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      token = encode_token({ user_id: user.id })
      render json: { loggedin: true, user: user.as_json(only: [:id, :name]), jwt: token }, status: :accepted
    elsif admin && admin.authenticate(params[:password])
      token = encode_token({ admin_id: admin.id })
      render json: { loggedin: true, admin: admin.as_json(only: [:id, :name]), jwt: token }, status: :accepted
    else
      render json: { error: 'Invalid email/username or password' }, status: :unauthorized
    end
  end

  def destroy
    cookies.delete(:jwt_token)
    render json: { message: 'Logged out successfully' }
  end

  private

  def session_params
    params.permit(:email, :username, :password)
  end
end
