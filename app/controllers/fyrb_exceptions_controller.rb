class FyrbExceptionsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_exception, only: [:update, :destroy]
  
  def index
    @exceptions = FyrbException.all
    render json: @exceptions, status: :ok
  end

  def show
    @exception = FyrbException.find(params[:id])
    render json: @exception, status: :ok
  end

  ## Start here
  def create
    @exception = FyrbException.new(exception_params)
    if @exception.save
      render json: @exception, status: :created
    else
      render json: { errors: @exception.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @exception.update(exception_params)
      render json: { errors: @exception.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @exception, status: :created
    end
  end

  def destroy
    unless @exception.destroy
      render json: { errors: @exception.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @exception, status: :created
    end
  end

  private
  def exception_params
    params.permit(
      :fyrb_user_id, :fyrb_program_id, :platforms, :steps, :mul_errors, :solutions
    )
  end
  
  ## update/destroy
  def find_exception
    @exception = FyrbException.find(params[:id])
  end

end
