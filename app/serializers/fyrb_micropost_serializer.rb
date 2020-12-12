class FyrbMicropostSerializer < ActiveModel::Serializer
  # ActiveModelSerializers.config.adapter = :json_api
  belongs_to :fyrb_user
  has_many :fyrb_terms, dependent: :destroy
  has_many :fyrb_statements, dependent: :destroy
  has_many :fyrb_fragments, dependent: :destroy
  attributes :id, :title, :content
end
