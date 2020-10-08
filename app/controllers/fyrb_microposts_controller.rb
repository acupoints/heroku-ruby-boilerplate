class FyrbMicropostsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  before_action :find_micropost, only: [:update, :destroy]
  
  # GET /users
  def index
    @microposts = FyrbMicropost.all
    render json: @microposts, status: :ok
  end

  # GET /users/{username}
  def show
    @micropost = FyrbMicropost.find(params[:id])
    render json: @micropost, status: :ok
    # render json: @micropost, serializer: FyrbMicropostSerializer
  end

  # POST /users
  def create
    @micropost = FyrbMicropost.new(micropost_params)
    if @micropost.save
      render json: @micropost, status: :created
    else
      render json: { errors: @micropost.errors.full_messages },
              status: :unprocessable_entity
    end
  end

  # PUT /users/{username}
  def update
    unless @micropost.update(micropost_params)
      render json: { errors: @micropost.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  # DELETE /users/{username}
  def destroy
    @micropost.destroy
  end

  ##
  private
  def micropost_params
    params.permit(
      :fyrb_user_id, :title, :content
    )
  end

  def find_micropost
    @micropost = FyrbMicropost.find(params[:id])
  end

end
