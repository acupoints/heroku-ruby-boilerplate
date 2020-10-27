class FyrbTermsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_term, only: [:update, :destroy]

  def index
    @terms = FyrbTerm.all
    render json: @terms, status: :ok
  end

  def show
    @term = FyrbTerm.find(params[:id])
    render json: @term, status: :ok
  end

  def create
    @term = FyrbTerm.new(term_params)
    if @term.save
      render json: @term, status: :created
    else
      render json: { errors: @term.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @term.update(term_params)
      render json: { errors: @term.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @term, status: :created
    end
  end

  def destroy
    unless @term.destroy
      render json: { errors: @term.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @term, status: :created
    end
  end

  private
  def term_params
    params.permit(
      :fyrb_user_id, :fyrb_micropost_id, :phrase, :annotation
    )
  end
  
  ## update/destroy
  def find_term
    @term = FyrbTerm.find(params[:id])
  end
end
