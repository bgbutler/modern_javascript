// const sayHello = function(){
//   console.log('Hello');
// }



// // regular arrow functions
// const sayHello = () => {
//   console.log('Hello');
// }


// arrow Functions 1 line
// const sayHello = () => console.log('Hello');

//sayHello();

// 1 line returns nothing until function called
// const sayHello = () => 'Hello';


// // literal
// const sayHello = () => ({msg: 'Hello World' });
// console.log(sayHello());

// with params single param does not need ()
// const sayHello = (name) => console.log(`Hello ${name}`);
//
// sayHello('bryan')


const users = ['bryan', 'rachel', 'mimi', 'minerva', 'wolfie']

// const nameLengths = users.map(function(name){
//   return name.length;
// })

// arrow function
// const nameLengths = users.map((name) => {
//   return name.length;
// });


// cleaner Arrow
const nameLengths = users.map(name => name.length)


console.log(nameLengths);
