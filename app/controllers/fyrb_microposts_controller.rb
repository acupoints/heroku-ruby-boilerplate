class FyrbMicropostsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_micropost, only: [:update, :destroy]

  def index
    ## Use the original method to query
    # @microposts = FyrbMicropost.all
    # render json: @microposts, status: :ok

    ## Use pagination method to query
    # @microposts = FyrbMicropost.paginate(page: params[:page], per_page: 5)
    # render json: @microposts, status: :ok, meta: pagination_dict(@microposts)

    ## Use full-text search method to query
    if params[:query].present?
      @microposts_search = FyrbMicropost.global_search(params[:query])
      @microposts = @microposts_search.paginate(page: params[:page], per_page: 5)
    else
      @microposts = FyrbMicropost.paginate(page: params[:page], per_page: 5)
    end
    render json: @microposts, status: :ok, meta: pagination_dict(@microposts)
  end

  def show
    @micropost = FyrbMicropost.find(params[:id])
    render json: @micropost, status: :ok
  end

  def create
    @micropost = FyrbMicropost.new(micropost_params)
    if @micropost.save
      render json: @micropost, status: :created
    else
      render json: { errors: @micropost.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @micropost.update(micropost_params)
      render json: { errors: @micropost.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @micropost, status: :created
    end
  end

  def destroy
    unless @micropost.destroy
      render json: { errors: @micropost.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @micropost, status: :created
    end
  end

  private
  def micropost_params
    params.permit(
      :fyrb_user_id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
    )
  end
  
  ## update/destroy
  def find_micropost
    @micropost = FyrbMicropost.find(params[:id])
  end

end
