class CreateFyrbInterfaces < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_interfaces do |t|
      t.text :platforms
      t.text :steps
      t.text :mul_errors
      t.text :solutions
      t.references :fyrb_user, null: false, foreign_key: true
      t.references :fyrb_program, null: false, foreign_key: true

      t.timestamps
    end
  end
end
