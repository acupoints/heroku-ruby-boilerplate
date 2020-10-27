class FyrbFragmentSerializer < ActiveModel::Serializer
  belongs_to :fyrb_tool
  belongs_to :fyrb_micropost
  attributes :id, :title, :introduction, :detail, :summary, :group, :level
end
