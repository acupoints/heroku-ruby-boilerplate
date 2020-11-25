class CreateFyrbGraphicSymbols < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_graphic_symbols do |t|
      t.string :uppercase_letters
      t.string :lowercase_letters
      t.string :english_phonetics
      t.string :chinese_phonetics
      t.text :meanings
      t.integer :alphabetical
      t.string :origins
      t.string :dialects
      t.string :themes
      t.string :dialects
      t.string :types
      t.text :paths
      t.text :styles
      t.integer :is_vowel
      t.integer :is_consonant
      t.integer :is_unvoiced
      t.integer :is_voiced
      t.integer :is_accent
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
