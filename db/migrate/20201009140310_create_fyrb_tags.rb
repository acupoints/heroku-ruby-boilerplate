class CreateFyrbTags < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_tags do |t|
      t.string :name
      t.text :description
      t.string :color
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
