class FyrbTool < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_fragments, dependent: :destroy
end
