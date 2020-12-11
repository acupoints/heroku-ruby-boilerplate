class FyrbObjectInspectorSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :object_name, :framework, :description, :languages, :properties, :methods, :events, :used_counts
end
