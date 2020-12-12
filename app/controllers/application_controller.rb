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

    # will_paginate
    def pagination_dict(collection)
        {
            current_page: collection.current_page,
            next_page: collection.next_page,
            previous_page: collection.previous_page,
            total_pages: collection.total_pages,
            total_entries: collection.total_entries,
            per_page: collection.per_page,
        }
    end
    
end
