require './connect.rb'

for num in 1..10
  $users.insert_one({
    "name" => "user_#{num}"
  })

  puts "Create user with number #{num}"
end
