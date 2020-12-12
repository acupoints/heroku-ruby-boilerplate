class FyrbMicropostsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_micropost, only: [:update, :destroy]
  
  def index
    # @microposts = FyrbMicropost.all
    @microposts = FyrbMicropost.paginate(page: params[:page]||1, per_page: 6)
    # render json: @microposts, status: :ok
    render json: @microposts, status: :ok, root: false
    # render json: {
    #   :current_page => @microposts.current_page,
    #   :per_page => @microposts.per_page,
    #   :total_entries => @microposts.total_entries,
    #   :entries => @microposts
    # }, status: :ok
  end

  def show
    @micropost = FyrbMicropost.find(params[:id])
    render json: @micropost, status: :ok
  end

  ## Start here
  def create
    @micropost = FyrbMicropost.new(micropost_params)
    if @micropost.save
      render json: @micropost, status: :created
    else
      render json: { errors: @micropost.errors.full_messages },
              status: :unprocessable_entity
    end
  end

  def update
    unless @micropost.update(micropost_params)
      render json: { errors: @micropost.errors.full_messages },
             status: :unprocessable_entity
    else
      render json: @micropost, status: :created
    end
  end

  def destroy
    @micropost.destroy
  end

  private
  def micropost_params
    params.permit(
      :fyrb_user_id, :title, :content
    )
  end

  ## update/destroy
  def find_micropost
    @micropost = FyrbMicropost.find(params[:id])
  end

end
