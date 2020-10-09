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

ActiveRecord::Schema.define(version: 2020_10_09_143831) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

  create_table "fyrb_microposts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.bigint "fyrb_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fyrb_user_id"], name: "index_fyrb_microposts_on_fyrb_user_id"
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

  add_foreign_key "fyrb_fragments", "fyrb_microposts"
  add_foreign_key "fyrb_fragments", "fyrb_tools"
  add_foreign_key "fyrb_microposts", "fyrb_users"
  add_foreign_key "fyrb_statements", "fyrb_microposts"
  add_foreign_key "fyrb_statements", "fyrb_terms"
  add_foreign_key "fyrb_tags", "fyrb_users"
  add_foreign_key "fyrb_terms", "fyrb_microposts"
  add_foreign_key "fyrb_terms", "fyrb_users"
  add_foreign_key "fyrb_tools", "fyrb_users"
end
