class CreateFyrbFragments < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_fragments do |t|
      t.string :title
      t.text :introduction
      t.text :detail
      t.text :summary
      t.text :group
      t.integer :level
      t.references :fyrb_tool, null: false, foreign_key: true
      t.references :fyrb_micropost, null: false, foreign_key: true

      t.timestamps
    end
  end
end
