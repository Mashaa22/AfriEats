# class ApplicationController < ActionController::API

#     wrap_parameters format: []
#     rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
#     rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
  
#     def encode_token(payload)
#       JWT.encode(payload, 'my_s3cr3t')
#     end
  
#     def auth_header
#       request.headers['Authorization']
#     end
  
#     def decoded_token
#       if auth_header
#         token = auth_header.split(' ')[1]
#         begin
#           JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
#         rescue JWT::DecodeError
#           nil
#         end
#       end
#     end
  
#     def set_current_user
#       if decoded_token
#         user_id = decoded_token[0]['user_id']  
#         if user_id
#           @current_user = User.find_by(id: user_id)   
#       end
#     end
    
#     end
#     def logged_in?
#       !!@current_user 
#     end
#     def logged
#       render json: { logged_in: logged_in?, current_user: @current_user }, include: :books
#     end
    
#     def authorized_user
#       render json: { message: 'Please log in as a user' }, status: :unauthorized unless logged_in? && @current_user.is_a?(User)
#     end
  
#     def authorized_admin
#       render json: { message: 'Please log in as an admin' }, status: :unauthorized unless logged_in? && @current_user.is_a?(Admin)
#     end
  

#     def authorize
#       set_current_user 
    
#       if logged_in?
#         if @current_user.is_a?(User) || @current_user.is_a?(Admin)
#           return true
#         end
#       end
    
#       render json: { message: 'Please log in as a user or an admin' }, status: :unauthorized
#     end
    
#   end

class ApplicationController < ActionController::API
  attr_accessor :current_user

  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

  def encode_token(payload)
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def set_current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      if user_id
        @current_user = User.find_by(id: user_id)
      end
    end
  end

  def logged_in?
    set_current_user
    !!@current_user
  end

  def logged
    render json: { logged_in: logged_in?, current_user: @current_user }, include: :books
  end

  def authorized_user
    render json: { message: 'Please log in as a user' }, status: :unauthorized unless logged_in? && @current_user.is_a?(User)
  end

  def authorized_admin
    render json: { message: 'Please log in as an admin' }, status: :unauthorized unless logged_in? && @current_user.is_a?(Admin)
  end

  def authorize
    if logged_in?
      set_current_user
      if @current_user.is_a?(User) || @current_user.is_a?(Admin)
        return true
      end
    end

    render json: { message: 'Please log in as a user or an admin' }, status: :unauthorized
  end
end

