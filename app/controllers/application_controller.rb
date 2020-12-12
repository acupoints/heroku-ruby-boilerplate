class ApplicationController < ActionController::Base
    def not_found
        render json: { error: 'not_found' }
    end

    def authorize_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        begin
            @decoded = JsonWebToken.decode(header)
            @current_user = FyrbUser.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound => e
            render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { errors: e.message }, status: :unauthorized
        end
    end

    def pagination_dict(collection)
        {
          current_page: collection.current_page,
          next_page: collection.next_page,
        #   prev_page: collection.prev_page, # use collection.previous_page when using will_paginate
          prev_page: collection.previous_page, # use collection.previous_page when using will_paginate
          total_pages: collection.total_pages,
          total_count: collection.total_count
        }
    end
    
end
