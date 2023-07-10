

// async function myFunc() {
//   // return 'Hello World';
//
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello World'), 1000);
//   });
//
//   const error = false; // it true get error
//
//   if(!error) {const res = await promise; // wiat 1 second
//   return res;
//     } else {
//       await Promise.reject(new Error('Somethig went wrong  . . .'));
//
//   }
//
//
// }
//
// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));




async function getUsers() {
  // await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // only proceed once its resolved
  const data = await response.json();

// only proceed once second promise is resolved
  return data;;

}

getUsers().then(users => console.log(users))
