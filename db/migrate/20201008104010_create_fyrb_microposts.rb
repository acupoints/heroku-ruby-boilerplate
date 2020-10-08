class CreateFyrbMicroposts < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_microposts do |t|
      t.string :title
      t.text :content
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
