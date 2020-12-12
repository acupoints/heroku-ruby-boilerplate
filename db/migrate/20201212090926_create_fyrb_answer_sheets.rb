class CreateFyrbAnswerSheets < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_answer_sheets do |t|
      t.string :title
      t.text :description
      t.text :conclusion
      t.integer :used_counts
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
