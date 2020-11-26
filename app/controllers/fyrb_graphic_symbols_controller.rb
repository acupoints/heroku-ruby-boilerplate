class FyrbGraphicSymbolsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_graphic_symbol, only: [:update, :destroy]

  def index
    @graphic_symbols = FyrbGraphicSymbol.all
    render json: @graphic_symbols, status: :ok
  end

  def show
    @graphic_symbol = FyrbGraphicSymbol.find(params[:id])
    render json: @graphic_symbol, status: :ok
  end

  def create
    @graphic_symbol = FyrbGraphicSymbol.new(graphic_symbol_params)
    if @graphic_symbol.save
      render json: @graphic_symbol, status: :created
    else
      render json: { errors: @graphic_symbol.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @graphic_symbol.update(graphic_symbol_params)
      render json: { errors: @graphic_symbol.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @graphic_symbol, status: :created
    end
  end

  def destroy
    unless @graphic_symbol.destroy
      render json: { errors: @graphic_symbol.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @graphic_symbol, status: :created
    end
  end

  private
  def graphic_symbol_params
    params.permit(
      :fyrb_user_id, :uppercase_letters, :lowercase_letters, :english_phonetics, :chinese_phonetics, :meanings, :alphabetical, :origins, :dialects, :themes, :types, :paths, :styles, :is_vowel, :is_consonant, :is_unvoiced, :is_voiced, :is_accent
    )
  end
  
  ## update/destroy
  def find_graphic_symbol
    @graphic_symbol = FyrbGraphicSymbol.find(params[:id])
  end

end
