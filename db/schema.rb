# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20141005232125) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "meetings", force: true do |t|
    t.string   "email"
    t.string   "meeting_type"
    t.string   "name"
    t.string   "phone"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude_shift"
    t.float    "longitude_shift"
  end

  add_index "meetings", ["email"], name: "index_meetings_on_email", using: :btree
  add_index "meetings", ["meeting_type"], name: "index_meetings_on_meeting_type", using: :btree

end
