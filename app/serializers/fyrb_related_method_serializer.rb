class FyrbRelatedMethodSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  belongs_to :fyrb_object_inspector
  attributes :id, :interface_name, :interface_type, :description, :languages, :parameters, :keywords, :return_types, :used_counts
end
