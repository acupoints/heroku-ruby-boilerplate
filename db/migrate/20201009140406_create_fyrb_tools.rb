class CreateFyrbTools < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_tools do |t|
      t.string :name
      t.text :description
      t.integer :active
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
