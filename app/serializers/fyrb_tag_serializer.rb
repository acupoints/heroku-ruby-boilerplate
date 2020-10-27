class FyrbTagSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :name, :description, :color
end
