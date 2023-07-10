// create elements

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement('a')

// add a class and html
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// now append link
li.appendChild(link)

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);
