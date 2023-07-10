
/*
document.querySelector('.clear-tasks').addEventListener('click',
function(){
  console.log('Hello World');
});
*/


document.querySelector('.clear-tasks').addEventListener('click',
onClick);
function onClick(e){
  // console.log('Button Clicked');

let val;
val = e;

// event target element
val = e.target;
val = e.target.classList;

val = e.type;

val = e.timeStamp;

val = e.clientY;
val = e.offsetY;

console.log(val);

};
