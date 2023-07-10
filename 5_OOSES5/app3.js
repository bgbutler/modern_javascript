// inheritance

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('bryan', 'butler');

console.log(person1.greeting());


// customer

function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// inherit the person protottype methods
Customer.prototype = Object.create(Person.prototype)

// mmake customer.prototype return Customer()
Customer.prototype.constructor = Customer;


const customer1 = new Customer('rachel', 'butler', '1233141', 'spouse');

console.log(customer1);

Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to the jungle`
}

console.log(customer1.greeting());
