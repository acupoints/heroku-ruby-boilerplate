class FyrbSurprisingLinkSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :site_names, :site_categories, :site_descriptions, :site_highlights
end
