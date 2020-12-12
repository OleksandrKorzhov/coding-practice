require './connect.rb'

# $users.find() - return a cursor for us
# cursor is iterable
users_array = $users.find()
users_array.each do |user|
  p user[:name]
end
