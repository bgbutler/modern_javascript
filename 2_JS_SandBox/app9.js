
// iterations and loops

for(let i = 0; i < 10; i++){
  if(i ===2 ){
    console.log('2 is my favorite number');

  }
    console.log(i);
}



// while loop

let i = 0;

while(i <10){
  console.log('Number ' + i)
  i++;
}


// do while loop
let x = 0;

do {
  console.log('The number is ' + x);
  x++;
}

while(x <10)

// looping through arrays

const cars = ['Ford', 'Chevy', 'Subaru', 'Honda'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}




// for each arrays

cars.forEach(function(car){
  console.log(car);
});





// map method

const users = [
  {id:1, name: 'John'},
  {id: 2, name: 'Bryan'},
  {id: 3, name: 'Rachel'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);




var car = {
  make: 'Subaru',
  model: 'Forrester',
  year: 2003
}

for(let x in car){
  console.log(`${x} : ${car[x]}`);
}
