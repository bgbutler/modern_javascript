// instantiate easy HTTP

const http = new easyHTTP;

// get posts

// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts){
//   if(err){
//     console.log(err);
//   } else {
//   console.log(posts);
//   }
// });


// get single posts
//
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//   console.log(post);
//   }
// });


// POST request

// create some Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err, post){
//   if(err){
//       console.log(err);
//     } else {
//     console.log(post);
//     }
// });




// PUT as an update to a posts
// http.put('https://jsonplaceholder.typicode.com/posts/1',
// data, function(err, post){
//     if(err){
//         console.log(err);
//       } else {
//       console.log(post);
//       }
//
// })


http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){
  if(err){
    console.log(err);
  } else {
  console.log(response);
  }
});
