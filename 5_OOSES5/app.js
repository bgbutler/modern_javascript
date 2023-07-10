

// constructors

function Person(name, dob) {
  this.name = name;
  // this.age = age;

  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}



// const bryan = new Person();
const bryan = new Person('Bryan', '9/16/1969');

// console.log(bryan);

console.log(bryan.calculateAge());
