class FyrbUsersController < ApplicationController
    before_action :authorize_request, except: :create
    skip_before_action :verify_authenticity_token, :only => [:create]
    before_action :find_user, except: %i[create index]

    # GET /users
    def index
      @users = FyrbUser.all
      render json: @users, status: :ok
    end
  
    # GET /users/{username}
    def show
      render json: @user, status: :ok
    end
  
    # POST /users
    def create
      @user = FyrbUser.new(user_params)
      if @user.save
        render json: @user, status: :created
      else
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  
    # PUT /users/{username}
    def update
      unless @user.update(user_params)
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  
    # DELETE /users/{username}
    def destroy
      @user.destroy
    end
  
    private
  
    def find_user
      @user = FyrbUser.find_by_username!(params[:_username])
      rescue ActiveRecord::RecordNotFound
        render json: { errors: 'User not found' }, status: :not_found
    end
  
    def user_params
      params.permit(
        :avatar, :name, :username, :email, :password, :password_confirmation
      )
    end
end
