class CreateFyrbObjectInspectors < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_object_inspectors do |t|
      t.string :object_name
      t.string :framework
      t.text :description
      t.text :languages
      t.text :properties
      t.text :methods
      t.text :events
      t.integer :used_counts
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
