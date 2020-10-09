class CreateFyrbTerms < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_terms do |t|
      t.string :phrase
      t.text :annotation
      t.references :fyrb_user, null: false, foreign_key: true
      t.references :fyrb_micropost, null: false, foreign_key: true

      t.timestamps
    end
  end
end
