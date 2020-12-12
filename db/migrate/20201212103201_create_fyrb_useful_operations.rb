class CreateFyrbUsefulOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_useful_operations do |t|
      t.text :tags
      t.text :commands
      t.text :options
      t.text :functions
      t.text :examples
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
