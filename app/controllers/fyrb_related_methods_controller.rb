class FyrbRelatedMethodsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_related_method, only: [:update, :destroy]

  def index
    ## Use the original method to query
    @related_methods = FyrbRelatedMethod.all
    render json: @related_methods, status: :ok

    ## Use pagination method to query
    # @related_methods = FyrbRelatedMethod.paginate(page: params[:page], per_page: 5)
    # render json: @related_methods, status: :ok, meta: pagination_dict(@related_methods)

    ## Use full-text search method to query
    # if params[:query].present?
    #   @related_methods_search = FyrbRelatedMethod.global_search(params[:query])
    #   @related_methods = @related_methods_search.paginate(page: params[:page], per_page: 5)
    # else
    #   @related_methods = FyrbRelatedMethod.paginate(page: params[:page], per_page: 5)
    # end
    # render json: @related_methods, status: :ok, meta: pagination_dict(@related_methods)
  end

  def show
    @related_method = FyrbRelatedMethod.find(params[:id])
    render json: @related_method, status: :ok
  end

  def create
    @related_method = FyrbRelatedMethod.new(related_method_params)
    if @related_method.save
      render json: @related_method, status: :created
    else
      render json: { errors: @related_method.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @related_method.update(related_method_params)
      render json: { errors: @related_method.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @related_method, status: :created
    end
  end

  def destroy
    unless @related_method.destroy
      render json: { errors: @related_method.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @related_method, status: :created
    end
  end

  private
  def related_method_params
    params.permit(
      :fyrb_user_id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
    )
  end
  
  ## update/destroy
  def find_related_method
    @related_method = FyrbRelatedMethod.find(params[:id])
  end

end
