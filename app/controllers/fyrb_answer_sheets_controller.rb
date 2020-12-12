class FyrbAnswerSheetsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_answer_sheet, only: [:update, :destroy]

  def index
    ## Use the original method to query
    # @answer_sheets = FyrbAnswerSheet.all
    # render json: @answer_sheets, status: :ok

    ## Use pagination method to query
    # @answer_sheets = FyrbAnswerSheet.paginate(page: params[:page], per_page: 5)
    # render json: @answer_sheets, status: :ok, meta: pagination_dict(@answer_sheets)

    ## Use full-text search method to query
    if params[:query].present?
      @answer_sheets_search = FyrbAnswerSheet.global_search(params[:query])
      @answer_sheets = @answer_sheets_search.paginate(page: params[:page], per_page: 5)
    else
      @answer_sheets = FyrbAnswerSheet.paginate(page: params[:page], per_page: 5)
    end
    render json: @answer_sheets, status: :ok, meta: pagination_dict(@answer_sheets)
  end

  def show
    @answer_sheet = FyrbAnswerSheet.find(params[:id])
    render json: @answer_sheet, status: :ok
  end

  def create
    @answer_sheet = FyrbAnswerSheet.new(answer_sheet_params)
    if @answer_sheet.save
      render json: @answer_sheet, status: :created
    else
      render json: { errors: @answer_sheet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @answer_sheet.update(answer_sheet_params)
      render json: { errors: @answer_sheet.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @answer_sheet, status: :created
    end
  end

  def destroy
    unless @answer_sheet.destroy
      render json: { errors: @answer_sheet.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @answer_sheet, status: :created
    end
  end

  private
  def answer_sheet_params
    params.permit(
      :fyrb_user_id, :title, :description, :conclusion, :used_counts
    )
  end
  
  ## update/destroy
  def find_answer_sheet
    @answer_sheet = FyrbAnswerSheet.find(params[:id])
  end

end
