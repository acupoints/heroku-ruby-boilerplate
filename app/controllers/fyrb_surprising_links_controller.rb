class FyrbSurprisingLinksController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_surprising_link, only: [:update, :destroy]

  def index
    @surprising_links = FyrbSurprisingLink.all
    render json: @surprising_links, status: :ok
  end

  def show
    @surprising_link = FyrbSurprisingLink.find(params[:id])
    render json: @surprising_link, status: :ok
  end

  def create
    @surprising_link = FyrbSurprisingLink.new(surprising_link_params)
    if @surprising_link.save
      render json: @surprising_link, status: :created
    else
      render json: { errors: @surprising_link.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @surprising_link.update(surprising_link_params)
      render json: { errors: @surprising_link.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @surprising_link, status: :created
    end
  end

  def destroy
    unless @surprising_link.destroy
      render json: { errors: @surprising_link.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @surprising_link, status: :created
    end
  end

  private
  def surprising_link_params
    params.permit(
      :fyrb_user_id, :site_names, :site_categories, :site_descriptions, :site_highlights
    )
  end
  
  ## update/destroy
  def find_surprising_link
    @surprising_link = FyrbSurprisingLink.find(params[:id])
  end

end
