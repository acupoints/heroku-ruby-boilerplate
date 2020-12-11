class FyrbUser < ApplicationRecord
    has_many :fyrb_microposts, dependent: :destroy
    has_many :fyrb_tags, dependent: :destroy
    has_many :fyrb_tools, dependent: :destroy
    has_many :fyrb_terms, dependent: :destroy
    has_many :fyrb_programs, dependent: :destroy
    has_many :fyrb_exceptions, dependent: :destroy
    has_many :fyrb_interfaces, dependent: :destroy

    has_many :fyrb_utility_functions, dependent: :destroy
    has_many :fyrb_code_snippets, dependent: :destroy
    has_many :fyrb_surprising_links, dependent: :destroy
    has_many :fyrb_graphic_symbols, dependent: :destroy

    has_many :fyrb_object_inspectors, dependent: :destroy
    has_many :fyrb_related_methods, dependent: :destroy
    
    has_secure_password
    # mount_uploader :avatar, AvatarUploader
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :password,
              length: { minimum: 6 },
              if: -> { new_record? || !password.nil? }
end
