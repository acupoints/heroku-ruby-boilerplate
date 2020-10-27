class FyrbStatementsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_statement, only: [:update, :destroy]

  def index
    @statements = FyrbStatement.all
    render json: @statements, status: :ok
  end

  def show
    @statement = FyrbStatement.find(params[:id])
    render json: @statement, status: :ok
  end

  def create
    @statement = FyrbStatement.new(statement_params)
    if @statement.save
      render json: @statement, status: :created
    else
      render json: { errors: @statement.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @statement.update(statement_params)
      render json: { errors: @statement.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @statement, status: :created
    end
  end

  def destroy
    unless @statement.destroy
      render json: { errors: @statement.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @statement, status: :created
    end
  end

  private
  def statement_params
    params.permit(
      :fyrb_term_id, :fyrb_micropost_id, :original, :comprehension
    )
  end
  
  ## update/destroy
  def find_statement
    @statement = FyrbStatement.find(params[:id])
  end

end
