class CreateFyrbUtilityFunctions < ActiveRecord::Migration[6.0]
  def change
    create_table :fyrb_utility_functions do |t|
      t.string :imports
      t.string :input_parameters
      t.string :output_parameters
      t.string :return_results
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
