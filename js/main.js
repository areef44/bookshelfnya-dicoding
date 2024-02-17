// array kosong untuk menampung data books
const books = [];
console.log(books);

// mendefinisikan Custom Event dengan nama 'render-books'
const RENDER_EVENT = 'render-books';

document.addEventListener('DOMContentLoaded', function(){
    const submitForm = document.getElementById('inputBook');
    submitForm.addEventListener('submit', function (event){
        event.preventDefault();
        addBooks();
    })

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
