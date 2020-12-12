class FyrbAnswerSheetSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :title, :description, :conclusion, :used_counts
end
