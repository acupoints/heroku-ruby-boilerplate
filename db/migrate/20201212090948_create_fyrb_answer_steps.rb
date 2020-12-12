class CreateFyrbAnswerSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_answer_steps do |t|
      t.text :antecedent
      t.text :operation
      t.text :consequence
      t.text :audio_animation
      t.integer :used_counts
      t.references :fyrb_user, null: false, foreign_key: true
      t.references :fyrb_answer_sheet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
