// iterators and generators

// iterators
// iterates through array each time function called
function nameIterator(names){
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false} :
      {done: true}
    }
  }
}


// create array of names

const namesArr = ['Jack','Jill', 'John']

// init iterator and pass in the names array

const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
