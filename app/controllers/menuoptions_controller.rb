class MenuoptionsController < ApplicationController
  before_action :set_menuoption, only: %i[ show update destroy ]

  # GET /menuoptions
  def index
    @menuoptions = Menuoption.all

    render json: @menuoptions
  end

  # GET /menuoptions/1
  def show
    render json: @menuoption
  end

  # POST /menuoptions
  def create
    @menuoption = Menuoption.new(menuoption_params)

    if @menuoption.save
      render json: @menuoption, status: :created, location: @menuoption
    else
      render json: @menuoption.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menuoptions/1
  def update
    if @menuoption.update(menuoption_params)
      render json: @menuoption
    else
      render json: @menuoption.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menuoptions/1
  def destroy
    @menuoption.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menuoption
      @menuoption = Menuoption.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def menuoption_params
      params.require(:menuoption).permit(:restaurant_id, :name, :price, :description, :image_url)
    end
end
