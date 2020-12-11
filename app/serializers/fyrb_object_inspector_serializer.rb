class FyrbObjectInspectorSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  has_many :fyrb_related_methods, dependent: :destroy
  attributes :id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
end
