# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_11_050911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fyrb_code_snippets", force: :cascade do |t|
    t.text "source_lines"
    t.string "development_tools"
    t.text "resolved_exceptions"
    t.text "module_templates"
    t.string "languages"
    t.string "support_platforms"
    t.integer "used_counts"
    t.text "instructions"
    t.string "naming_conventions"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_code_snippets_on_fyrb_user_id"
  end

  create_table "fyrb_exceptions", force: :cascade do |t|
    t.text "platforms"
    t.text "steps"
    t.text "mul_errors"
    t.text "solutions"
    t.bigint "fyrb_user_id", null: false
    t.bigint "fyrb_program_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_program_id"], name: "index_fyrb_exceptions_on_fyrb_program_id"
    t.index ["fyrb_user_id"], name: "index_fyrb_exceptions_on_fyrb_user_id"
  end

  create_table "fyrb_fragments", force: :cascade do |t|
    t.string "title"
    t.text "introduction"
    t.text "detail"
    t.text "summary"
    t.text "group"
    t.integer "level"
    t.bigint "fyrb_tool_id", null: false
    t.bigint "fyrb_micropost_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_micropost_id"], name: "index_fyrb_fragments_on_fyrb_micropost_id"
    t.index ["fyrb_tool_id"], name: "index_fyrb_fragments_on_fyrb_tool_id"
  end

  create_table "fyrb_graphic_symbols", force: :cascade do |t|
    t.string "uppercase_letters"
    t.string "lowercase_letters"
    t.string "english_phonetics"
    t.string "chinese_phonetics"
    t.text "meanings"
    t.integer "alphabetical"
    t.string "origins"
    t.string "dialects"
    t.string "themes"
    t.string "types"
    t.text "paths"
    t.text "styles"
    t.integer "is_vowel"
    t.integer "is_consonant"
    t.integer "is_unvoiced"
    t.integer "is_voiced"
    t.integer "is_accent"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_graphic_symbols_on_fyrb_user_id"
  end

  create_table "fyrb_interfaces", force: :cascade do |t|
    t.text "platforms"
    t.text "steps"
    t.text "mul_errors"
    t.text "solutions"
    t.bigint "fyrb_user_id", null: false
    t.bigint "fyrb_program_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_program_id"], name: "index_fyrb_interfaces_on_fyrb_program_id"
    t.index ["fyrb_user_id"], name: "index_fyrb_interfaces_on_fyrb_user_id"
  end

  create_table "fyrb_microposts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_microposts_on_fyrb_user_id"
  end

  create_table "fyrb_object_inspectors", force: :cascade do |t|
    t.string "object_name"
    t.string "framework"
    t.text "description"
    t.text "languages"
    t.text "properties"
    t.text "methods"
    t.text "events"
    t.integer "used_counts"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_object_inspectors_on_fyrb_user_id"
  end

  create_table "fyrb_programs", force: :cascade do |t|
    t.string "name"
    t.string "alias"
    t.string "platform"
    t.string "version"
    t.text "description"
    t.text "shortcuts"
    t.text "installation"
    t.text "uninstall"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_programs_on_fyrb_user_id"
  end

  create_table "fyrb_statements", force: :cascade do |t|
    t.text "original"
    t.text "comprehension"
    t.bigint "fyrb_term_id", null: false
    t.bigint "fyrb_micropost_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_micropost_id"], name: "index_fyrb_statements_on_fyrb_micropost_id"
    t.index ["fyrb_term_id"], name: "index_fyrb_statements_on_fyrb_term_id"
  end

  create_table "fyrb_surprising_links", force: :cascade do |t|
    t.string "site_names"
    t.string "site_categories"
    t.text "site_descriptions"
    t.text "site_highlights"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_surprising_links_on_fyrb_user_id"
  end

  create_table "fyrb_tags", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "color"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_tags_on_fyrb_user_id"
  end

  create_table "fyrb_terms", force: :cascade do |t|
    t.string "phrase"
    t.text "annotation"
    t.bigint "fyrb_user_id", null: false
    t.bigint "fyrb_micropost_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_micropost_id"], name: "index_fyrb_terms_on_fyrb_micropost_id"
    t.index ["fyrb_user_id"], name: "index_fyrb_terms_on_fyrb_user_id"
  end

  create_table "fyrb_tools", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "active"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_tools_on_fyrb_user_id"
  end

  create_table "fyrb_users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fyrb_utility_functions", force: :cascade do |t|
    t.string "imports"
    t.string "input_parameters"
    t.string "output_parameters"
    t.string "return_results"
    t.string "languages"
    t.string "support_platforms"
    t.integer "used_counts"
    t.text "instructions"
    t.string "naming_conventions"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_utility_functions_on_fyrb_user_id"
  end

  add_foreign_key "fyrb_code_snippets", "fyrb_users"
  add_foreign_key "fyrb_exceptions", "fyrb_programs"
  add_foreign_key "fyrb_exceptions", "fyrb_users"
  add_foreign_key "fyrb_fragments", "fyrb_microposts"
  add_foreign_key "fyrb_fragments", "fyrb_tools"
  add_foreign_key "fyrb_graphic_symbols", "fyrb_users"
  add_foreign_key "fyrb_interfaces", "fyrb_programs"
  add_foreign_key "fyrb_interfaces", "fyrb_users"
  add_foreign_key "fyrb_microposts", "fyrb_users"
  add_foreign_key "fyrb_object_inspectors", "fyrb_users"
  add_foreign_key "fyrb_programs", "fyrb_users"
  add_foreign_key "fyrb_statements", "fyrb_microposts"
  add_foreign_key "fyrb_statements", "fyrb_terms"
  add_foreign_key "fyrb_surprising_links", "fyrb_users"
  add_foreign_key "fyrb_tags", "fyrb_users"
  add_foreign_key "fyrb_terms", "fyrb_microposts"
  add_foreign_key "fyrb_terms", "fyrb_users"
  add_foreign_key "fyrb_tools", "fyrb_users"
  add_foreign_key "fyrb_utility_functions", "fyrb_users"
end
