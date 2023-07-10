// replace elements


// replace h5 with h2

// create the new heading elements
const newHeading = document.createElement('h2');

newHeading.id = 'task-title'

newHeading.appendChild(document.createTextNode('My Tasks'));


// create old heading to replace it
const oldHeading = document.getElementById('task-title')

// get the parent
const cardAction = document.querySelector('.card-action')

// now replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE element

const lis = document.querySelectorAll('li');

const list = document.querySelector('ul');

// remove list Item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTR

const firstli = document.querySelector('li:first-child')
const link = firstli.children[0];

let val;

val = link.className;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

val = link;

// attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('href');

val = link;

console.log(val);
