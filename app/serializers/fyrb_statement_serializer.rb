class FyrbStatementSerializer < ActiveModel::Serializer
  belongs_to :fyrb_term
  belongs_to :fyrb_micropost
  attributes :id, :original, :comprehension
end
