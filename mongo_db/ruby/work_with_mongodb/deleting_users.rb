require './connect.rb'

$users.find({ name: 'user_2' }).delete_many

puts 'Users with number 2 are deleted'