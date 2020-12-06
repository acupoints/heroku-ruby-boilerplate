class CreateFyrbCodeSnippets < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_code_snippets do |t|
      t.text :source_lines
      t.string :development_tools
      t.text :resolved_exceptions
      t.text :module_templates
      t.string :languages
      t.string :support_platforms
      t.integer :used_counts
      t.text :instructions
      t.string :naming_conventions
      t.references :fyrb_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
