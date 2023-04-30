# class AdminsController < ApplicationController
#   before_action :set_admin, only: %i[ show update destroy ]

#   # GET /admins
#   def index
#     @admins = Admin.all

#     render json: @admins
#   end

#   # GET /admins/1
#   def show
#     render json: @admin
#   end

#   # POST /admins
#   def create
#     @admin = Admin.new(admin_params)

#     if @admin.save
#       render json: @admin, status: :created, location: @admin
#     else
#       render json: @admin.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /admins/1
#   def update
#     if @admin.update(admin_params)
#       render json: @admin
#     else
#       render json: @admin.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /admins/1
#   def destroy
#     @admin.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_admin
#       @admin = Admin.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def admin_params
#       params.require(:admin).permit(:username, :email, :password, :pin)

#     end
# end
require 'sendgrid-ruby'

class AdminsController < ApplicationController
  before_action :set_admin, only: %i[ show update destroy ]

  # GET /admins
  def index
    @admins = Admin.all

    render json: @admins
  end

  # GET /admins/1
  def show
    render json: @admin
  end

  # POST /admins
  def create
    @admin = Admin.new(admin_params)
  
    if @admin.save
      # Generate and save a random 6-digit PIN for the admin
      pin = rand(100_000..999_999)
      @admin.update(pin: pin)
  
      # Send an email to the admin with the PIN
      AdminMailer.send_pin(@admin, pin).deliver_now
  
      render json: @admin, status: :created, location: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end
  # def create
  #   @admin = Admin.new(admin_params)

  #   if @admin.save
  #     # Generate and save a random 6-digit PIN for the admin
  #     pin = rand(100_000..999_999)
  #     @admin.update(pin: pin)

  #     # Send an email to the admin with the PIN
  #     from = SendGrid::Email.new(email: 'maranga22@zohomail.com')
  #     to = SendGrid::Email.new(email: @admin.email)
  #     subject = 'Welcome to AfriEats!'
  #     content = SendGrid::Content.new(type: 'text/plain', value: "Your PIN is: #{pin}")
  #     mail = SendGrid::Mail.new(from, subject, to, content)

  #     sg = SendGrid::API.new(api_key: SendGrid.api_key)
  #     response = sg.client.mail._('send').post(request_body: mail.to_json)

  #     render json: @admin, status: :created, location: @admin
  #   else
  #     render json: @admin.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /admins/1
  def update
    if @admin.update(admin_params)
      render json: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    @admin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_params
      params.require(:admin).permit(:username, :email, :password, :pin)
    end
end
