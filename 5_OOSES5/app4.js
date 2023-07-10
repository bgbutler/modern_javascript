const personPrototype = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`
 },
    getsMarried: function(newLastName){
      this.lastName = newLastName;
    }
}

const bryan = Object.create(personPrototype);

bryan.firstName = 'Bryan';
bryan.lastName = 'Butler'


const minerva = Object.create(personPrototype, {
  firstName: {value: 'Minerva'},
  lastName: {value: 'butler'},
});



console.log(bryan);

console.log(minerva.greeting());
