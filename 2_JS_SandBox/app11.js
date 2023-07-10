

var a = 1;
let b = 2;

const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('function scope: ', a, b, c);
// }
//
// test();

// block Scope
// if(true){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('if scope: ', a,b,c);
// }



for(var a = 0; a < 10; a++){
  console.log(`loop ${a}`);
}



console.log('Global Scope: ', a,b,c);
