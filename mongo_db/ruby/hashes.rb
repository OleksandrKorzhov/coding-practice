names = {
  "guest" => "Bully",
  "owner" => "Willie"
}

puts names["owner"]
puts names["guest"]

# new syntax since ruby 1.9
items = {
  toy: "Some toy"
}

puts items[:toy]

#old syntax before ruby 1.9
stock = {
  :amount => 100,
  :type => "Store"
}

puts stock[:amount]
