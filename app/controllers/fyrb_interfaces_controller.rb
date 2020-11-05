class FyrbInterfacesController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_interface, only: [:update, :destroy]
  
  def index
    @interfaces = FyrbInterface.all
    render json: @interfaces, status: :ok
  end

  def show
    @interface = FyrbInterface.find(params[:id])
    render json: @interface, status: :ok
  end

  ## Start here
  def create
    @interface = FyrbInterface.new(interface_params)
    if @interface.save
      render json: @interface, status: :created
    else
      render json: { errors: @interface.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @interface.update(interface_params)
      render json: { errors: @interface.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @interface, status: :created
    end
  end

  def destroy
    unless @interface.destroy
      render json: { errors: @interface.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @interface, status: :created
    end
  end

  private
  def interface_params
    params.permit(
      :fyrb_user_id, :fyrb_program_id, :platforms, :steps, :mul_errors, :solutions
    )
  end
  
  ## update/destroy
  def find_interface
    @interface = FyrbInterface.find(params[:id])
  end

end
