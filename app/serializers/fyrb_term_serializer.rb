class FyrbTermSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  belongs_to :fyrb_micropost
  has_many :fyrb_statements, dependent: :destroy
  attributes :id, :phrase, :annotation
end
