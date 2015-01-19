# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


 # create_table "posts", force: :cascade do |t|
 #    t.string   "title"
 #    t.text     "content"
 #    t.string   "tag"
 #    t.datetime "created_at", null: false
 #    t.datetime "updated_at", null: false
 #  end

 firstpost = Post.create({
 	title: "Hello World",
 	content: "This is the first post (It will be used to test the seedfile).",
 	tag: "meta, code, rubyonrails, generalassembly"
 	})