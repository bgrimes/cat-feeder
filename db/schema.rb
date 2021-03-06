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

ActiveRecord::Schema.define(version: 20140308215843) do

  create_table "auth_users", force: true do |t|
    t.string   "email"
    t.string   "name"
    t.string   "uid"
    t.string   "token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "auth_users", ["email"], name: "index_auth_users_on_email"

  create_table "feeders", force: true do |t|
    t.string   "name"
    t.string   "device_id"
    t.string   "api_token"
    t.integer  "created_by"
    t.integer  "updated_by"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "jobs", force: true do |t|
    t.integer  "auth_user_id"
    t.string   "name"
    t.time     "run_at"
    t.datetime "last_run"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "jobs", ["auth_user_id"], name: "index_jobs_on_auth_user_id"

end
