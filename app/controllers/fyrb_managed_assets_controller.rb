class FyrbManagedAssetsController < ApplicationController
  before_action :authorize_request
  skip_before_action :verify_authenticity_token, :only => [:create, :update, :destroy]
  ## update/destroy
  before_action :find_managed_asset, only: [:update, :destroy]

  def index
    ## Use the original method to query
    # @managed_assets = FyrbManagedAsset.all
    # render json: @managed_assets, status: :ok

    ## Use pagination method to query
    # @managed_assets = FyrbManagedAsset.paginate(page: params[:page], per_page: 5)
    # render json: @managed_assets, status: :ok, meta: pagination_dict(@managed_assets)

    ## Use full-text search method to query
    if params[:query].present?
      @managed_assets_search = FyrbManagedAsset.global_search(params[:query])
      @managed_assets = @managed_assets_search.paginate(page: params[:page], per_page: 5)
    else
      @managed_assets = FyrbManagedAsset.paginate(page: params[:page], per_page: 5)
    end
    render json: @managed_assets, status: :ok, meta: pagination_dict(@managed_assets)
  end

  def show
    @managed_asset = FyrbManagedAsset.find(params[:id])
    render json: @managed_asset, status: :ok
  end

  def create
    @managed_asset = FyrbManagedAsset.new(managed_asset_params)
    if @managed_asset.save
      render json: @managed_asset, status: :created
    else
      render json: { errors: @managed_asset.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @managed_asset.update(managed_asset_params)
      render json: { errors: @managed_asset.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @managed_asset, status: :created
    end
  end

  def destroy
    unless @managed_asset.destroy
      render json: { errors: @managed_asset.errors.full_messages }, status: :unprocessable_entity
    else
      render json: @managed_asset, status: :created
    end
  end

  private
  def managed_asset_params
    params.permit(
      :fyrb_user_id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
    )
  end
  
  ## update/destroy
  def find_managed_asset
    @managed_asset = FyrbManagedAsset.find(params[:id])
  end

end
