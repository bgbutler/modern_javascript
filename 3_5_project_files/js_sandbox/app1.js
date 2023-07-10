let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;


// get child nodes
val = list.childNodes;

val = list.childNodes[0];
val = list.childNodes[0].nodeType;

// types
// 1 - element
// 2 - Attribute
// 3 - text
// 8 - Comment
// 9 - document itself
//10 - Doctype


// get children element nodes
val = list.children[1];
list.children[1].textContent = 'hello Bryan';
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling can also call previousSibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

console.log(val);
