class FyrbUsefulOperationsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_useful_operation, only: [:update, :destroy]

  def index
    ## Use the original method to query
    # @useful_operations = FyrbUsefulOperation.all
    # render json: @useful_operations, status: :ok

    ## Use pagination method to query
    # @useful_operations = FyrbUsefulOperation.paginate(page: params[:page], per_page: 5)
    # render json: @useful_operations, status: :ok, meta: pagination_dict(@useful_operations)

    ## Use full-text search method to query
    if params[:query].present?
      @useful_operations_search = FyrbUsefulOperation.global_search(params[:query])
      @useful_operations = @useful_operations_search.paginate(page: params[:page], per_page: 5)
    else
      @useful_operations = FyrbUsefulOperation.paginate(page: params[:page], per_page: 5)
    end
    render json: @useful_operations, status: :ok, meta: pagination_dict(@useful_operations)
  end

  def show
    @useful_operation = FyrbUsefulOperation.find(params[:id])
    render json: @useful_operation, status: :ok
  end

  def create
    @useful_operation = FyrbUsefulOperation.new(useful_operation_params)
    if @useful_operation.save
      render json: @useful_operation, status: :created
    else
      render json: { errors: @useful_operation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @useful_operation.update(useful_operation_params)
      render json: { errors: @useful_operation.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @useful_operation, status: :created
    end
  end

  def destroy
    unless @useful_operation.destroy
      render json: { errors: @useful_operation.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @useful_operation, status: :created
    end
  end

  private
  def useful_operation_params
    params.permit(
      :fyrb_user_id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
    )
  end
  
  ## update/destroy
  def find_useful_operation
    @useful_operation = FyrbUsefulOperation.find(params[:id])
  end

end
