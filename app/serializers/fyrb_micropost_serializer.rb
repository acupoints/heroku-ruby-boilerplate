class FyrbMicropostSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :title, :content
end
