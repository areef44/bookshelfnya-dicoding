// define local storage
const STORAGE_KEY = "BOOK_STORAGE"
const SAVED_EVENT = 'saved-book';

function isStorageExist() /* boolean */ {
  if (typeof (Storage) === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});

// array kosong untuk menampung data books
const books = [];

// mendefinisikan Custom Event dengan nama 'render-books'
const RENDER_EVENT = 'render-books';

document.addEventListener('DOMContentLoaded', function(){

    if (isStorageExist()) {
      loadDataFromStorage();
    }

    // trigger form tambah buku
    const submitForm = document.getElementById('inputBook');
    submitForm.addEventListener('submit', function (event){
        event.preventDefault();
        addBooks();
    });

    // trigger form search book
    const submitSearch = document.getElementById("searchBook");
    submitSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        searchBooks();
    });

    // Render Books
    document.addEventListener(RENDER_EVENT, function() {
        renderBooks('incompleteBookshelfList', false);
        renderBooks('completeBookshelfList', true);
    });

    function renderBooks(containerId, isComplete) {
        const bookContainer = document.getElementById(containerId);

        // Check if the element exists before manipulating it
        if (bookContainer) {
            // Clear previous content
            bookContainer.innerHTML = '';

            const filteredBooks = books.filter(book => book.isComplete === isComplete);

            filteredBooks.forEach(function(book) {
                const bookElement = makeBooks(book);
                bookContainer.appendChild(bookElement);
            });
        }
    }

});

function findBookIndex(bookId) {
    for (const index in books) {
      if (books[index].id === bookId) {
        console.log(index);
        return index;
      }
    }
    return -1;
}

// hilangkan todo nya dari list yang akan dilakukan
function findBook(bookId) {
    for (const bookItem of books) {
      if (bookItem.id === bookId) {
        return bookItem;
      }
    }
    return null;
}

// Ganti Text ketika checkbox di Click
function updateButtonText() {
  const checkbox = document.getElementById('inputBookIsComplete');
  const buttonTextSpan = document.getElementById('bookSubmit').querySelector('span');

  if (checkbox.checked) {
      buttonTextSpan.innerText = 'Selesai dibaca';
  } else {
      buttonTextSpan.innerText = 'Belum selesai dibaca';
  }
}


function saveData() {
  // cek browser mendukung local storage apa tidak 
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);
 
  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }
 
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// event untuk menampilkan books di console yang telah diinput kedalam memory
document.addEventListener(RENDER_EVENT, function () {
  console.log(books);
  // membersihkan kontainer yang akan diisi agar tidak terjadi duplikasi data
  const uncompletedBooksList = document.getElementById('incompleteBookshelfList');
  uncompletedBooksList.innerHTML = '';

  // membersihkan kontainer yang akan diisi agar tidak terjadi duplikasi data
  const completedBooksList = document.getElementById('completeBookshelfList');
  completedBooksList.innerHTML = '';

  // iterasi data yang dibuat oleh make todos dan render ke todoElement
  for (const bookItem of books) {
      const bookElement = makeBooks(bookItem);
      // isi penampung yang kosong tadi
      if (!bookItem.isComplete) {
          uncompletedBooksList.append(bookElement);
        }
      else
        completedBooksList.append(bookElement);
  }
});