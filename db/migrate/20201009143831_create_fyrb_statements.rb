class CreateFyrbStatements < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_statements do |t|
      t.text :original
      t.text :comprehension
      t.references :fyrb_term, null: false, foreign_key: true
      t.references :fyrb_micropost, null: false, foreign_key: true

      t.timestamps
    end
  end
end
