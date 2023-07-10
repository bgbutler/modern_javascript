
const http = new EasyHTTP;

// get users

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// user Data
const data = {
  name: 'Bryan Butler',
  username: 'bbutler',
  email: 'bbutler@me.com'
}


// // create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
//
//
//   // create put
//   http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


    // create delete
    http.delete('https://jsonplaceholder.typicode.com/users/2')
      .then(data => console.log(data))
      .catch(err => console.log(err));
