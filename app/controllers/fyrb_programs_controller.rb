class FyrbProgramsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_program, only: [:update, :destroy]

  def index
    @programs = FyrbProgram.all
    render json: @programs, status: :ok
  end

  def show
    @program = FyrbProgram.find(params[:id])
    render json: @program, status: :ok
  end

  def create
    @program = FyrbProgram.new(program_params)
    if @program.save
      render json: @program, status: :created
    else
      render json: { errors: @program.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @program.update(program_params)
      render json: { errors: @program.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @program, status: :created
    end
  end

  def destroy
    unless @program.destroy
      render json: { errors: @program.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @program, status: :created
    end
  end

  private
  def program_params
    params.permit(
      :fyrb_user_id, :name, :alias, :platform, :version, :description, :shortcuts, :installation, :uninstall
    )
  end
  
  ## update/destroy
  def find_program
    @program = FyrbProgram.find(params[:id])
  end

end
