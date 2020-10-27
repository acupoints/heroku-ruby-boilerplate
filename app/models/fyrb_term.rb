class FyrbTerm < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_statements, dependent: :destroy
  belongs_to :fyrb_micropost
end
