class FyrbTerm < ApplicationRecord
  belongs_to :fyrb_user
  belongs_to :fyrb_micropost
end
