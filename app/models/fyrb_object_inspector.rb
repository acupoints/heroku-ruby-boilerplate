class FyrbObjectInspector < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_related_methods, dependent: :destroy
end
