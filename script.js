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
    btitle.textContent = books[i].title;
    const bauthor = document.createElement('p');
    bauthor.className = 'bookauthor';
    bauthor.textContent = books[i].author;

    contain.appendChild(btitle);
    contain.appendChild(bauthor);
  }
}

showBooks();
