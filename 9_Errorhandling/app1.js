

// regular expressions
let re;

// add i for case insensitve

re = /hello/i;

// use /hello/g for a global search - all instances


// console.log(re);

// console.log(re.source);

// exec() return the results in an array if a match or null

// const result = re.exec('bryan hello world');

// console.log(result);

// console.log(result[0]);

// test() returns true of false

// const result = re.test('Hello bryan');

// match() return result array or null

// search() - returns the indec of the first match, else -1

// replace() return new string


const str = 'bryan Hello out There';
// const result = str.match(re);

const newStr = str.replace(re, 'Hi');

// const result = str.search(re);
console.log(newStr);
