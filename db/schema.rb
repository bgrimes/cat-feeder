ActiveRecord::Schema.define(version: 20140301101432) do

  create_table "auth_users", force: true do |t|
    t.string   "email"
    t.string   "name"
    t.string   "uid"
    t.string   "token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "auth_users", ["email"], name: "index_auth_users_on_email", using: :btree

end
