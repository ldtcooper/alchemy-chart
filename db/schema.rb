# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170928052455) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "charts", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "dataset_id", null: false
    t.string "chart_type", null: false
    t.string "chart_sort", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "x_axis", null: false
    t.string "y_axis1", null: false
    t.string "y_axis2"
    t.string "name", null: false
    t.index ["dataset_id"], name: "index_charts_on_dataset_id"
    t.index ["owner_id", "name"], name: "index_charts_on_owner_id_and_name", unique: true
    t.index ["owner_id"], name: "index_charts_on_owner_id"
  end

  create_table "datasets", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "dataset_name", null: false
    t.string "data_type", null: false
    t.jsonb "data_text", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dataset_name", "owner_id"], name: "index_datasets_on_dataset_name_and_owner_id", unique: true
    t.index ["owner_id"], name: "index_datasets_on_owner_id"
  end

  create_table "shares", force: :cascade do |t|
    t.integer "chart_id", null: false
    t.integer "sharee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chart_id"], name: "index_shares_on_chart_id"
    t.index ["sharee_id"], name: "index_shares_on_sharee_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
