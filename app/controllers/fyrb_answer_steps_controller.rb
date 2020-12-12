class FyrbAnswerStepsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_answer_step, only: [:update, :destroy]

  def index
    ## Use the original method to query
    @answer_steps = FyrbAnswerStep.all
    render json: @answer_steps, status: :ok

    ## Use pagination method to query
    # @answer_steps = FyrbAnswerStep.paginate(page: params[:page], per_page: 5)
    # render json: @answer_steps, status: :ok, meta: pagination_dict(@answer_steps)

    ## Use full-text search method to query
    # if params[:query].present?
    #   @answer_steps_search = FyrbAnswerStep.global_search(params[:query])
    #   @answer_steps = @answer_steps_search.paginate(page: params[:page], per_page: 5)
    # else
    #   @answer_steps = FyrbAnswerStep.paginate(page: params[:page], per_page: 5)
    # end
    # render json: @answer_steps, status: :ok, meta: pagination_dict(@answer_steps)
  end

  def show
    @answer_step = FyrbAnswerStep.find(params[:id])
    render json: @answer_step, status: :ok
  end

  def create
    @answer_step = FyrbAnswerStep.new(answer_step_params)
    if @answer_step.save
      render json: @answer_step, status: :created
    else
      render json: { errors: @answer_step.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @answer_step.update(answer_step_params)
      render json: { errors: @answer_step.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @answer_step, status: :created
    end
  end

  def destroy
    unless @answer_step.destroy
      render json: { errors: @answer_step.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @answer_step, status: :created
    end
  end

  private
  def answer_step_params
    params.permit(
      :fyrb_user_id, :fyrb_answer_sheet_id, :antecedent, :operation, :consequence, :audio_animation, :used_counts
    )
  end
  
  ## update/destroy
  def find_answer_step
    @answer_step = FyrbAnswerStep.find(params[:id])
  end

end
