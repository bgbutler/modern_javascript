
// define ui variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners by calling function
loadEventListeners();

// create eventListener function
function loadEventListeners(){

  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task eventListener
  clearBtn.addEventListener('click', clearTasks);
  // Filter
  filter.addEventListener('keyup', filterTasks);
}


function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    tasks.forEach(function(task){
      const li = document.createElement('li');
      // add class
      li.className = 'collection-item';
      // create text node and append it o li
      li.appendChild(document.createTextNode(task));
      // create new link to x icon
      const link = document.createElement('a');
      // add class
      link.className = 'delete-item secondary-content';
      // add its icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // append the link to li
      li.appendChild(link);

      // append li to ui
      taskList.appendChild(li);
    });
}



function addTask(e){
  if(taskInput.value === ''){
    alert('Please add a task.');
  }
// create li element
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// create text node and append it o li
li.appendChild(document.createTextNode(taskInput.value));
// create new link to x icon
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content';
// add its icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// append the link to li
li.appendChild(link);

// append li to ui
taskList.appendChild(li);

/// store in local storage
storeTaskInLocalStorage(taskInput.value);

// clear input
taskInput.value = '';


  e.preventDefault();
}


// store task function
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}





// remove task
function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')) {
  if(confirm('Delete Task?')) {
  e.target.parentElement.parentElement.remove();

  // remove from local localStorage
  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// remove from local stroage function
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// clear all Tasks
function clearTasks(){
  // method 1 slower
  //taskList.innerHTML = '';

  // faster method
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
//  clear from local storage
clearTasksFromLocalStorage();

}

// clear taks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}



// filter
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  // querySelectorAll return a node list
  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
