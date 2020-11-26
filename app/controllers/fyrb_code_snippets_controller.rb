class FyrbCodeSnippetsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_code_snippet, only: [:update, :destroy]

  def index
    @code_snippets = FyrbCodeSnippet.all
    render json: @code_snippets, status: :ok
  end

  def show
    @code_snippet = FyrbCodeSnippet.find(params[:id])
    render json: @code_snippet, status: :ok
  end

  def create
    @code_snippet = FyrbCodeSnippet.new(code_snippet_params)
    if @code_snippet.save
      render json: @code_snippet, status: :created
    else
      render json: { errors: @code_snippet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @code_snippet.update(code_snippet_params)
      render json: { errors: @code_snippet.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @code_snippet, status: :created
    end
  end

  def destroy
    unless @code_snippet.destroy
      render json: { errors: @code_snippet.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @code_snippet, status: :created
    end
  end

  private
  def code_snippet_params
    params.permit(
      :fyrb_user_id, :source_lines, :development_tools, :resolved_exceptions, :module_templates, :languages, :support_platforms, :used_counts, :instructions, :naming_conventions
    )
  end
  
  ## update/destroy
  def find_code_snippet
    @code_snippet = FyrbCodeSnippet.find(params[:id])
  end

end
