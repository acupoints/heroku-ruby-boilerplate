class FyrbUserSerializer < ActiveModel::Serializer
  has_many :fyrb_microposts, dependent: :destroy
  attributes :name, :email, :password_digest
end
