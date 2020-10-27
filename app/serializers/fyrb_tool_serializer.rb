class FyrbToolSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  has_many :fyrb_fragments, dependent: :destroy
  attributes :id, :name, :description, :active
end
