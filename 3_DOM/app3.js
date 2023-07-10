// documents.getElementsbyClassname

const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0]);


items[0].style.color = 'red';

items[3].textContent = 'Hello World';


const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// use tag getElementsByClassName

const lis = document.getElementsByTagName('li');
console.log(lis);

lis[0].style.color = 'blue';
lis[3].textContent = 'hello';


// convert HTML collection to array

let newLis = Array.from(lis);

newLis.reverse();

newLis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
  li.style.background = '#ccc';
});


console.log(newLis);
