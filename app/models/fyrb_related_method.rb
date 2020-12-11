class FyrbRelatedMethod < ApplicationRecord
  belongs_to :fyrb_user
  belongs_to :fyrb_object_inspector
end
