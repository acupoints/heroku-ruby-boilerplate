class FyrbObjectInspectorsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_object_inspector, only: [:update, :destroy]

  def index
    # @object_inspectors = FyrbObjectInspector.all
    @object_inspectors = FyrbObjectInspector.paginate(page: params[:page])
    render json: @object_inspectors, status: :ok
  end

  def show
    @object_inspector = FyrbObjectInspector.find(params[:id])
    render json: @object_inspector, status: :ok
  end

  def create
    @object_inspector = FyrbObjectInspector.new(object_inspector_params)
    if @object_inspector.save
      render json: @object_inspector, status: :created
    else
      render json: { errors: @object_inspector.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @object_inspector.update(object_inspector_params)
      render json: { errors: @object_inspector.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @object_inspector, status: :created
    end
  end

  def destroy
    unless @object_inspector.destroy
      render json: { errors: @object_inspector.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @object_inspector, status: :created
    end
  end

  private
  def object_inspector_params
    params.permit(
      :fyrb_user_id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
    )
  end
  
  ## update/destroy
  def find_object_inspector
    @object_inspector = FyrbObjectInspector.find(params[:id])
  end

end
