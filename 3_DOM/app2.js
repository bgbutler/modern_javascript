// single eleent selctors get first on of class
// multiple element selectors get QkPxCAFlNEevoEH3Sl0sibVcOQVnN

// document.getElementByID()

console.log(document.getElementById('task-title'));

const taskTitle = document.getElementById('task-title');
// // Change styling

// taskTitle.style.background = '#333';

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';

document.querySelector('li:nth-child(4)').textContent = 'Hello World';
