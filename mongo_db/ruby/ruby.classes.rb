class Greeting
  def initialize(name = 'Willie')
    @name = name;
  end
  def say_hello
    return "Hello #{@name}"
  end
end

# attr_accessor defines getter and setter for class field
class Person
  attr_accessor :name
  attr_accessor :age

  #initialize it's a constructor of our class
  def initialize(name, age)
    @name = name
    @age = age
  end
end

_person = Person.new('Willie', 24);
puts _person.respond_to?('name');
puts Person.instance_methods(false);

# class Empliyee < Person
  
# end

greeter = Greeting.new('World')
puts greeter.say_hello()

class Greater
  attr_accessor :names

  def initialize(names = 'willie')
    @names = names
  end

  def say_hello
    if @names.nil?
      puts 'No names =('
    elsif @names.respond_to?('each')
      @names.each do |name|
        puts "Hello plural #{name}"
      end
    else
      puts "Hello single #{@names}"
    end
  end
end

greater = Greater.new
greater.say_hello
greater.names = ['Billie', 'Willie'];
greater.say_hello
greater.names = nil
greater.say_hello




