const num1 = 100;
const num2 = 50;
let val;


// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1/num2;
val = num1 % num2;


// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);

// other methods are floor, sqrt, abs, pow, min, max
val = Math.pow(8,2);
val = Math.random();

// generate random int from 1 to 20
val = Math.floor(Math.random()*20 + 1);

console.log(val);
