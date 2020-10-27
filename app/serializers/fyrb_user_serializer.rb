class FyrbUserSerializer < ActiveModel::Serializer
  has_many :fyrb_microposts, dependent: :destroy
  has_many :fyrb_tags, dependent: :destroy
  has_many :fyrb_tools, dependent: :destroy
  has_many :fyrb_terms, dependent: :destroy
  attributes :id, :name, :username, :email, :password_digest
end
