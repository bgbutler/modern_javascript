

//Function Declarations

function greet(firstName = 'John'){
  // old wayif(typeof firstname === 'undefined'){firstName = 'John'}
  return 'Hello ' + firstName;
}


console.log(greet('bryan'));



// Function expressions


const square = function(x){
  return x * x;
};

console.log(square(8));

//immediately invokable funtion expressions - IIFEs

(function(name){
  console.log('IIFE Ran ..' + name);
})('Bryan');



//property methods

const todo = {
  add: function(){
    console.log('Add todo . . .');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }

}

todo.add();
todo.edit('walk Wolfie')
