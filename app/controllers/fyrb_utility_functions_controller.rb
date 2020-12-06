class FyrbUtilityFunctionsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_utility_function, only: [:update, :destroy]

  def index
    @utility_functions = FyrbUtilityFunction.all
    render json: @utility_functions, status: :ok
  end

  def show
    @utility_function = FyrbUtilityFunction.find(params[:id])
    render json: @utility_function, status: :ok
  end

  def create
    @utility_function = FyrbUtilityFunction.new(utility_function_params)
    if @utility_function.save
      render json: @utility_function, status: :created
    else
      render json: { errors: @utility_function.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @utility_function.update(utility_function_params)
      render json: { errors: @utility_function.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @utility_function, status: :created
    end
  end

  def destroy
    unless @utility_function.destroy
      render json: { errors: @utility_function.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @utility_function, status: :created
    end
  end

  private
  def utility_function_params
    params.permit(
      :fyrb_user_id, :imports, :input_parameters, :output_parameters, :return_results, :languages, :support_platforms, :used_counts, :instructions, :naming_conventions
    )
  end
  
  ## update/destroy
  def find_utility_function
    @utility_function = FyrbUtilityFunction.find(params[:id])
  end

end
