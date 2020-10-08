class FyrbUserSerializer < ActiveModel::Serializer
  has_many :fyrb_microposts, dependent: :destroy
  attributes :id, :name, :username, :email, :password_digest
end
