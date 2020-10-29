class FyrbProgramSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  has_many :fyrb_exceptions, dependent: :destroy
  attributes :id, :name, :alias, :platform, :version, :description, :shortcuts, :installation, :uninstall
end
