# passing variable amount of arguments
def great(*names)
  names.each {|name|
    puts name
  }
end

great('Top', 'Susy')