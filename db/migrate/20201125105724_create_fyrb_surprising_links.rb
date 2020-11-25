class CreateFyrbSurprisingLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_surprising_links do |t|
      t.string :site_names
      t.string :site_categories
      t.text :site_descriptions
      t.text :site_highlights
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
