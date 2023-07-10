// class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // method
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
  // static method
static addNumbers(x,y){
  return x + y;
}

}



const mimi = new Person('Mimi', 'Butler');

console.log(mimi);

console.log(Person.addNumbers(1,2));
