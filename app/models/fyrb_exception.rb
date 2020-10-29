class FyrbException < ApplicationRecord
  belongs_to :fyrb_user
  belongs_to :fyrb_program
end
