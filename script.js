let books = [];
const addBookButton = document.querySelector('button');
addBookButton.onclick = function addBookButton() {
  const btitle = document.querySelector('.title').value;
  const bauthor = document.querySelector('.author').value;
  const book = {
    title: btitle,
    author: bauthor,
  };
  if (localStorage.getItem('savedArray') != null) {
    books = JSON.parse(localStorage.getItem('savedArray'));
  }
  books.push(book);
  localStorage.setItem('savedArray', JSON.stringify(books));
};

function showBooks() {
  if (localStorage.getItem('savedArray') != null) {
    books = JSON.parse(localStorage.getItem('savedArray'));
  }
  for (let i = 0; i < books.length; i += 1) {
    
  }
  alert(books);
}

showBooks();
