const name1 = 'Bryan';
const name2 = new String('Bryan')


name2.foo = 'bar';

console.log(name1);
console.log(name2);

console.log(typeof name2);


// == checks value === checks value and typeof

if (name2 === 'Bryan'){
  console.log('YES');
} else {
  console.log('NO');

}


const num1 = 5;
const numb2 = new Number(5);

console.log(num1);
console.log(numb2);

// regular expressions

const re1 = /\w+/;

const re2 = new RegExp('\\w+')

console.log(re1);
console.log(re2);
