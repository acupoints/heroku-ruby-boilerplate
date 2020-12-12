class FyrbManagedAssetSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :specification, :unit_price, :amount, :vendor, :category, :purpose, :total_price
end
