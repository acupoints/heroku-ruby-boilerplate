class CreateFyrbManagedAssets < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_managed_assets do |t|
      t.string :product_name
      t.text :specification
      t.decimal :unit_price
      t.integer :amount
      t.string :vendor
      t.string :category
      t.string :purpose
      t.decimal :total_price
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
