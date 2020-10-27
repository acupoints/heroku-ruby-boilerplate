class FyrbTagsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_tag, only: [:update, :destroy]
  
  def index
    @tags = FyrbTag.all
    render json: @tags, status: :ok
  end

  def show
    @tag = FyrbTag.find(params[:id])
    render json: @tag, status: :ok
  end

  ## Start here
  def create
    @tag = FyrbTag.new(tag_params)
    if @tag.save
      render json: @tag, status: :created
    else
      render json: { errors: @tag.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @tag.update(tag_params)
      render json: { errors: @tag.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @tag, status: :created
    end
  end

  def destroy
    unless @tag.destroy
      render json: { errors: @tag.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @tag, status: :created
    end
  end

  private
  def tag_params
    params.permit(
      :fyrb_user_id, :name, :description, :color
    )
  end
  
  ## update/destroy
  def find_tag
    @tag = FyrbTag.find(params[:id])
  end

end
