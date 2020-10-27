class FyrbFragmentsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_fragment, only: [:update, :destroy]

  def index
    @fragments = FyrbFragment.all
    render json: @fragments, status: :ok
  end

  def show
    @fragment = FyrbFragment.find(params[:id])
    render json: @fragment, status: :ok
  end

  def create
    @fragment = FyrbFragment.new(fragment_params)
    if @fragment.save
      render json: @fragment, status: :created
    else
      render json: { errors: @fragment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @fragment.update(fragment_params)
      render json: { errors: @fragment.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @fragment, status: :created
    end
  end

  def destroy
    unless @fragment.destroy
      render json: { errors: @fragment.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @fragment, status: :created
    end
  end

  private
  def fragment_params
    params.permit(
      :fyrb_tool_id, :fyrb_micropost_id, :title, :introduction, :detail, :summary, :group, :level
    )
  end
  
  ## update/destroy
  def find_fragment
    @fragment = FyrbFragment.find(params[:id])
  end

end
