const firstname = 'William';
const lastname = 'Johnson';
const str = 'Hello my name is Bryan';
const age = 36;

let val;
val = firstname + lastname;

// concatenation
val = firstname + " " + lastname;

//  Append
val = 'Bryan ';
val += 'Butler';

val = 'Hello, my name is ' + firstname + ' and I am ' + age;

// escape with \ character
val = 'That\'s awesome, I can\'t wait';

// toUpperCase(), toLowerCase()

val = firstname[2];

val = firstname.indexOf('l');

// get last character of string
val = firstname.charAt(firstname.length-1);

// substring
val = firstname.substring(0,4);

// last x characters
val = lastname.slice(-4);

val = str.split(" ");

// str.includes()

val = str.includes('Bryan');

console.log(val);
