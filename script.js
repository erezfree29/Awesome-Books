/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
class Library {
  constructor(books) {
    this.books = books;
  }

  addBook() {
    const addBookButton = document.querySelector('button');
    addBookButton.onclick = function addBookButton() {
      if (localStorage.getItem('savedArray') != null) {
        library.books = JSON.parse(localStorage.getItem('savedArray'));
      }
      if (document.querySelector('.title').value !== '' && document.querySelector('.author').value !== '') {
        const btitle = document.querySelector('.title').value;
        const bauthor = document.querySelector('.author').value;
        const book = {
          title: btitle,
          author: bauthor,
        };
        library.books.push(book);
      }

      localStorage.setItem('savedArray', JSON.stringify(library.books));
    };
  }

  showBooks() {
    if (localStorage.getItem('savedArray') != null) {
      library.books = JSON.parse(localStorage.getItem('savedArray'));
    }
    const contain = document.querySelector('.books');
    for (let i = 0; i < library.books.length; i += 1) {
      const btitle = document.createElement('h5');
      btitle.className = 'bookname';
      btitle.id = library.books[i].title;
      btitle.textContent = library.books[i].title;
      const bauthor = document.createElement('p');
      bauthor.className = 'bookauthor';
      bauthor.textContent = library.books[i].author;
      btitle.appendChild(bauthor);
      const removeButton = document.createElement('button');
      removeButton.setAttribute('onclick', `library.removeFunction('${library.books[i].title}')`);
      removeButton.className = 'remove';
      removeButton.id = `remove${library.books[i].title}`;
      removeButton.textContent = 'remove';
      const horizontal = document.createElement('hr');
      horizontal.className = 'hr';
      contain.appendChild(btitle);
      contain.appendChild(removeButton);
      contain.appendChild(horizontal);
    }
  }

  // eslint-disable-next-line no-unused-vars
  removeFunction(title) {
    for (let i = 0; i < library.books.length; i += 1) {
      if (library.books[i].title === title) {
        library.books.splice(i, 1);
        localStorage.setItem('savedArray', JSON.stringify(library.books));
        const deleteBook = document.querySelector(`#${CSS.escape(title)}`);
        const deleteBookButton = document.querySelector(`#remove${CSS.escape(title)}`);
        deleteBook.parentNode.removeChild(deleteBook);
        deleteBookButton.parentNode.removeChild(deleteBookButton);
      }
    }
  }
}

let library = new Library([]);
library.addBook();
library.showBooks();