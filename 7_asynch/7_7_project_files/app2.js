const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);
};

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title, post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

createPost({title: 'Post Three', body: 'The third post'}, getPosts);
