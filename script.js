let books = [];
let c;

const addBookButton = document.querySelector('button');
addBookButton.addEventListener('click', () => {
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
  alert(books[1].title);
})();