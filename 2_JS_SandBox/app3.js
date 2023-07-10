let val;

//number to string

// numbers and booeans are blue
// strings are black

val = String(555);
val = String(4+4);

//bool to string
val = String(true);

//date to string
val = String(new Date());

// array to strings
val = String([1,2,3,4]);

val = (5).toString();

val = (true).toString();

// String to number
val = Number('5');

val = Number(false);

val = Number(null);

val = Number('hello');

val = Number([1,2,3,4]);

val = parseInt('100.30');

val = parseFloat('100.30');

//console.log(val);
//console.log(typeof val);

// length is only for strings
//console.log(val.length);

//console.log(val.toFixed());

// type coercion 6 gets converted to string
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
