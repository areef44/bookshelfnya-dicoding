function getBook(bookId){
    // const bookFind = findBook(bookId);
    const books = getData();
    const bookFind = books.filter((book) => book.id === bookId);
  
    console.log(bookFind);

    if (bookFind == null) return;

    let inputBookTitle = document.getElementById('inputBookTitle');
    let inputBookAuthor = document.getElementById('inputBookAuthor');
    let inputBookYear = document.getElementById('inputBookYear');
    let inputBookIsComplete = document.getElementById('inputBookIsComplete');
    let bookSubmit = document.getElementById('bookSubmit');
    let bookUpdate = document.getElementById('bookUpdate');

    if (bookSubmit) {
        inputBookIsComplete.disabled = true;
        bookSubmit.style.display = 'none';
        bookUpdate.style.display = 'block';
    }

    inputBookTitle.value = bookFind[0].title;
    inputBookAuthor.value = bookFind[0].author;
    inputBookYear.value = bookFind[0].year;
    inputBookIsComplete.checked = bookFind[0].isComplete;

    const bookUpdatedId = bookFind[0].id;

    bookUpdate.removeEventListener('click', updateBookHandler);


    bookUpdate.addEventListener('click', function() {
        updateBook(bookUpdatedId);
    });

}

function updateBook(bookUpdatedId){

    // console.log(updatedBook);

    let updatedBook = {
        id: bookUpdatedId,
        title: document.getElementById('inputBookTitle').value,
        author: document.getElementById('inputBookAuthor').value,
        year: document.getElementById('inputBookYear').value,
        isComplete: document.getElementById('inputBookIsComplete').checked,
    };

    let index = books.findIndex(book => book.id === bookUpdatedId);

    if (index !== -1) {

        updatedBook.isComplete = books[index].isComplete;

        books[index] = updatedBook;

        const bookUpdate = document.getElementById('bookUpdate');
        const bookSubmit = document.getElementById('bookSubmit');
        if (bookUpdate) {
            bookUpdate.style.display = 'none';
            bookSubmit.style.display = 'block';
        }
            
    }

    saveData();
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function updateBookHandler() {
  const bookUpdatedId = event.target.dataset.bookId;
  const books = getData();
  const bookToUpdate = books.find((book) => book.id === bookUpdatedId);

  if (bookToUpdate) {
    updateBook(bookToUpdate);
  }
}