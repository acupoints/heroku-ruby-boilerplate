class FyrbToolsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_tool, only: [:update, :destroy]

  def index
    @tools = FyrbTool.all
    render json: @tools, status: :ok
  end

  def show
    @tool = FyrbTool.find(params[:id])
    render json: @tool, status: :ok
  end

  def create
    @tool = FyrbTool.new(tool_params)
    if @tool.save
      render json: @tool, status: :created
    else
      render json: { errors: @tool.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @tool.update(tool_params)
      render json: { errors: @tool.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @tool, status: :created
    end
  end

  def destroy
    unless @tool.destroy
      render json: { errors: @tool.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @tool, status: :created
    end
  end

  private
  def tool_params
    params.permit(
      :fyrb_user_id, :name, :description, :active
    )
  end
  
  ## update/destroy
  def find_tool
    @tool = FyrbTool.find(params[:id])
  end

end
