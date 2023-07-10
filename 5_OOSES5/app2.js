// prototypes

// constructors

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //  const diff = Date.now() - this.birthday.getTime();
  //  const ageDate = new Date(diff);
  //  return Math.abs(ageDate.getUTCFullYear() - 1970);
  //}
}


const bryan = new Person('bryan', 'butler', '9-16-1969');

console.log(bryan);

// calculate ageDate

Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}



console.log(bryan);

console.log(bryan.calculateAge());

console.log(bryan.getFullName());
