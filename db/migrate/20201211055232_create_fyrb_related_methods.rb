class CreateFyrbRelatedMethods < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_related_methods do |t|
      t.string :interface_name
      t.string :interface_type
      t.text :description
      t.text :languages
      t.text :parameters
      t.text :keywords
      t.text :return_types
      t.integer :used_counts
      t.references :fyrb_user, null: false, foreign_key: true
      t.references :fyrb_object_inspector, null: false, foreign_key: true

      t.timestamps
    end
  end
end
