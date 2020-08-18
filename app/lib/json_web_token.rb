class JsonWebToken
    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
    ACCESS_TOKEN_SECRET = Rails.application.secrets.secret_key_base.to_s
    REFRESH_TOKEN_SECRET = Rails.application.secrets.secret_key_base.to_s
    TOKEN_SECRET = Rails.application.secrets.secret_key_base.to_s

    def self.encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, SECRET_KEY)
    end
    
    ##
    def self.encode_refresh(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, REFRESH_TOKEN_SECRET)
    end

    def self.encode_access(payload, exp = 12.minutes.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, ACCESS_TOKEN_SECRET)
    end

    def self.decode(token)
        decoded = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end

    ##
    def self.decode_refresh(token)
        decoded = JWT.decode(token, REFRESH_TOKEN_SECRET)[0]
        HashWithIndifferentAccess.new decoded
    end

    def self.decode_access(token)
        decoded = JWT.decode(token, ACCESS_TOKEN_SECRET)[0]
        HashWithIndifferentAccess.new decoded
    end
end