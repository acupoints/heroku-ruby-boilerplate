class FyrbProgram < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_exceptions, dependent: :destroy
end
