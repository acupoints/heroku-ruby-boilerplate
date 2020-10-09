class FyrbStatement < ApplicationRecord
  belongs_to :fyrb_term
  belongs_to :fyrb_micropost
end
