puts "Loops"

puts "While"
while_counter = 10
while while_counter > 0
  puts while_counter
  while_counter -= 1
end

puts "For"
puts '+ tree dot notation - range except last'
for item in 1...10
  puts item
end

puts "+ two dot notation - range include first and last"
puts "Just for in"
for item in 1..10
  puts item
end

puts "for in + next"
for item in 1..5
  # analog of "continue" in js
  next if item < 5
  puts item
end

puts "Times"
# {} - determine block of code???
# as for me {} it's analog of do ... nad it's determine passed block which will be executed
5.times {
  puts 'some'
}

puts "Loop - pottentialy infinity loop"
loopIndex = 0
loop {
  puts loopIndex
  loopIndex += 1
  # dont work!!!
  if loopIndex == 0
    break
  end
  # work
  break if (loopIndex == 10)
}

names = ['willie', 'joi', 'tai']
names.each do |name|
  puts "Name for each + do - #{name}"
end

names.each { |name|
  puts "Name from each + {} - #{name}"
}
