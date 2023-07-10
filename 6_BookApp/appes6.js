// ES6 Programming

class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}


class UI {
  // put all methods here
  addBookToList(book){
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

  showAlert(message, className){
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

  deleteBook(target){
    if(target.className=== 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}


// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}


// DOM load Event
document.addEventListener('DOMContentLoaded',
  Store.displayBooks);




// event listener
// add book event listener
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

      // add book to local storage
      Store.addBook(book);

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


  // remove from local Storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);


  // show message
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();

});
