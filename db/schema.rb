# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_24_164941) do
  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "menu_options_id", null: false
    t.string "name"
    t.integer "price"
    t.string "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_options_id"], name: "index_meals_on_menu_options_id"
    t.index ["restaurant_id"], name: "index_meals_on_restaurant_id"
  end

  create_table "menuoptions", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.string "name"
    t.integer "price"
    t.string "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_menuoptions_on_restaurant_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "meal_id", null: false
    t.string "status"
    t.string "address"
    t.text "date_of_delivery"
    t.integer "quantity"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meal_id"], name: "index_orders_on_meal_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.integer "admin_id", null: false
    t.string "name"
    t.string "image_url"
    t.string "chef_url"
    t.string "chef_quote"
    t.string "chef_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_restaurants_on_admin_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "meals", "menu_options", column: "menu_options_id"
  add_foreign_key "meals", "restaurants"
  add_foreign_key "menuoptions", "restaurants"
  add_foreign_key "orders", "meals"
  add_foreign_key "orders", "users"
  add_foreign_key "restaurants", "admins"
end
