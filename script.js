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
        let flag = 'down';
        for (let i = 0; i < library.books.length; i += 1) {
          if (library.books[i].title === btitle) {
            flag = 'up';
            break;
          }
        }
        if (flag === 'down') {
          library.books.push(book);
        }
        // add book line
        const scontain = document.querySelector('tbody');
        const srow = document.createElement('tr');
        const sth = document.createElement('th');
        sth.setAttribute('scope', 'row');
        srow.appendChild(sth);
        const shtd = document.createElement('td');
        const sdtd = document.createElement('td');
        const sbtitle = document.createElement('h5');
        sbtitle.className = 'bookname';
        sbtitle.textContent = `${book.title} by ${book.author}`;
        shtd.appendChild(sbtitle);
        const sremoveButton = document.createElement('button');
        sremoveButton.setAttribute('onclick', `library.removeFunction('${book.title}')`);
        sremoveButton.className = 'remove btn btn-danger';
        sremoveButton.id = `remove${book.title}`;
        sremoveButton.textContent = 'remove';
        sdtd.appendChild(sremoveButton);
        srow.appendChild(shtd);
        srow.appendChild(sdtd);
        srow.id = book.title;
        scontain.appendChild(srow);
        const sform = document.querySelector('.my-form');
        const saddHead = document.querySelector('.add_head');
        const stable = document.querySelector('.table-container');
        const scontact = document.querySelector('.contact_us');
        sform.style.display = 'none';
        saddHead.style.display = 'none';
        stable.style.display = 'block';
        scontact.style.display = 'none';
      }

      localStorage.setItem('savedArray', JSON.stringify(library.books));
    };
  }

  showBooks() {
    if (localStorage.getItem('savedArray') != null) {
      library.books = JSON.parse(localStorage.getItem('savedArray'));
    }
    const contain = document.querySelector('tbody');
    for (let i = 0; i < library.books.length; i += 1) {
      const row = document.createElement('tr');
      const th = document.createElement('th');
      th.setAttribute('scope', 'row');
      row.appendChild(th);
      const htd = document.createElement('td');
      const dtd = document.createElement('td');
      const btitle = document.createElement('h5');
      btitle.className = 'bookname';
      btitle.textContent = `${library.books[i].title} by ${library.books[i].author}`;
      htd.appendChild(btitle);
      const removeButton = document.createElement('button');
      removeButton.setAttribute('onclick', `library.removeFunction('${library.books[i].title}')`);
      removeButton.className = 'remove btn btn-danger';
      removeButton.id = `remove${library.books[i].title}`;
      removeButton.textContent = 'remove';
      dtd.appendChild(removeButton);
      row.appendChild(htd);
      row.appendChild(dtd);
      row.id = library.books[i].title;
      contain.appendChild(row);
    }
  }

  // eslint-disable-next-line no-unused-vars
  removeFunction(title) {
    for (let i = 0; i < library.books.length; i += 1) {
      if (library.books[i].title === title) {
        library.books.splice(i, 1);
        localStorage.setItem('savedArray', JSON.stringify(library.books));
        const deleteRow = document.querySelector(`#${CSS.escape(title)}`);
        deleteRow.parentNode.removeChild(deleteRow);
      }
    }

    function timeItUp() {
      const timer = document.getElementById('clock');
      const datertimer = luxon.DateTime.now();
      timer.innerText = datertimer.toLocaleString(luxon.DateTime.DATETIME_MED);
    }
    setInterval(() => {
      timeItUp();
    }, 1000);
  }
}

let library = new Library([]);
library.addBook();
library.showBooks();
library.timeItUp();

function displayForm() {
  const form = document.querySelector('.my-form');
  const addHead = document.querySelector('.add_head');
  const table = document.querySelector('.table-container');
  const contact = document.querySelector('.contact_us');
  form.style.display = 'block';
  addHead.style.display = 'block';
  table.style.display = 'none';
  contact.style.display = 'none';
}

function displayBooks() {
  const form = document.querySelector('.my-form');
  const addHead = document.querySelector('.add_head');
  const table = document.querySelector('.table-container');
  const contact = document.querySelector('.contact_us');
  form.style.display = 'none';
  addHead.style.display = 'none';
  table.style.display = 'block';
  contact.style.display = 'none';
}

function displayContact() {
  const form = document.querySelector('.my-form');
  const addHead = document.querySelector('.add_head');
  const table = document.querySelector('.table-container');
  const contact = document.querySelector('.contact_us');
  form.style.display = 'none';
  addHead.style.display = 'none';
  table.style.display = 'none';
  contact.style.display = 'block';
}