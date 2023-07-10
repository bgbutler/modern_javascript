const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

taskInput.value = '';

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);

taskInput.addEventListener('focus', runEvent);

taskInput.addEventListener('blur', runEvent);

taskInput.addEventListener('cut', runEvent);

taskInput.addEventListener('paste', runEvent);

taskInput.addEventListener('input', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value

  //console.log(taskInput.value);
}
