class CreateFyrbPrograms < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_programs do |t|
      t.string :name
      t.string :alias
      t.string :platform
      t.string :version
      t.text :description
      t.text :shortcuts
      t.text :installation
      t.text :uninstall
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
