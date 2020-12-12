require './connect.rb'

$users.update_many({"name" => "user_1"}, {
  "$set" => {
    "age" => 35,
    "social_networks": [
      'Facebook',
      'Instagram',
      'GooglePlus'
    ]
  }
})

puts "Users with number 1 is updated"
