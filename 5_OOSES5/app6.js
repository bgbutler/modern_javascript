
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

}


class Customer extends Person{
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  // static
  static getMembershipCost(){
    return 500;
  }


}

const wolfie = new Customer('wolfe', 'butler', '17', 'ocicat');

console.log(wolfie);


console.log(wolfie.greeting());

console.log(Customer.getMembershipCost());
