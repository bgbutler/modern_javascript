// ES5 Programming

// book constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// ui constructor
function UI(){}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list')
  // create table row
  const row = document.createElement('tr');
  // insert calls
  row.innerHTML= `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
}


// show the Alert
UI.prototype.showAlert = function(message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add createTextNodediv
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');
  // get the form
  const form = document.querySelector('#book-form');
  // insert the alert
  container.insertBefore(div, form);
  // clear after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);


}


// delete book
UI.prototype.deleteBook = function(target){
  if(target.className=== 'delete'){
    target.parentElement.parentElement.remove();
  }

}


// clear fields method
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// event listeners
document.getElementById('book-form').addEventListener('submit',
  function(e){
    // get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // instantiate book
   const book = new Book(title, author, isbn);

   // instantiate UI
   const ui = new UI();



   // validate entries
   if(title === '' || author === '' || isbn === ''){
     // error
     ui.showAlert('Please fill in all fields.', 'error');

   } else {
     // add book to list
      ui.addBookToList(book);

      // show success
      ui.showAlert('Book Added!', 'success');

      // clear the fields
      ui.clearFields();

   }




    e.preventDefault();
  });



// event listener for deleteBook
document.getElementById('book-list').addEventListener('click',
function(e){
  // instantiate UI
  const ui = new UI();

  // delete a book
  ui.deleteBook(e.target);
  // show message
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();

});
