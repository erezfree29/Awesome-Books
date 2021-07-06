let books = [];

const addBookButton = document.querySelector('button');
addBookButton.onclick = function addBookButton() {
  if (localStorage.getItem('savedArray') != null) {
    books = JSON.parse(localStorage.getItem('savedArray'));
  }
  if (document.querySelector('.title').value !== '' && document.querySelector('.author').value !== '') {
    const btitle = document.querySelector('.title').value;
    const bauthor = document.querySelector('.author').value;
    const book = {
      title: btitle,
      author: bauthor,
    };
    books.push(book);
  }

  localStorage.setItem('savedArray', JSON.stringify(books));
};

function showBooks() {
  if (localStorage.getItem('savedArray') != null) {
    books = JSON.parse(localStorage.getItem('savedArray'));
  }
  const contain = document.querySelector('.books');
  for (let i = 0; i < books.length; i += 1) {
    const btitle = document.createElement('h5');
    btitle.className = 'bookname';
    btitle.id = books[i].title;
    btitle.textContent = books[i].title;
    const bauthor = document.createElement('p');
    bauthor.className = 'bookauthor';
    bauthor.textContent = books[i].author;
    btitle.appendChild(bauthor);
    const removeButton = document.createElement('button');
    removeButton.setAttribute('onclick', `removeFunction('${books[i].title}')`);
    removeButton.id = `remove${books[i].title}`;
    removeButton.textContent = 'remove';
    contain.appendChild(btitle);
    contain.appendChild(removeButton);
  }
}

showBooks();

// eslint-disable-next-line no-unused-vars
function removeFunction(title) {
  for (let i = 0; i < books.length; i += 1) {
    if (books[i].title === title) {
      books.splice(i, 1);
      localStorage.setItem('savedArray', JSON.stringify(books));
      const deleteBook = document.querySelector(`#${CSS.escape(title)}`);
      const deleteBookButton = document.querySelector(`#remove${CSS.escape(title)}`);
      deleteBook.parentNode.removeChild(deleteBook);
      deleteBookButton.parentNode.removeChild(deleteBookButton);
    }
  }
}
