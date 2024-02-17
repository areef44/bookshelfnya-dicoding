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

    // add books
    function addBooks() {

        // get value from inputBookTitle 
        const title = document.getElementById('inputBookTitle').value;
        // console.log(title);

        const author = document.getElementById('inputBookAuthor').value;
        // console.log(author);

        const year = document.getElementById('inputBookYear').value;
        // console.log(year);

        const isComplete = document.getElementById('inputBookIsComplete').checked;
        // console.log(isComplete);

        const generateID = generateId();
        // console.log(generateID);

        const bookObject = generateBookObject(generateID, title, author, year, isComplete)
        // console.log(bookObject);

        books.push(bookObject);

        document.dispatchEvent(new Event(RENDER_EVENT));

    }

    // function generateID
    function generateId() {
        return +new Date();
    }

    // function untuk generate todo object ke dalam memory
    function generateBookObject(id, title, author, year, isComplete) {
        return {
          id,
          title,
          author,
          year,
          isComplete
        }
    }

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

    function makeBooks(bookObject){

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book_item');
    bookContainer.classList.add('action');

    // Create h3 element for book title
    const textTitle = document.createElement('h2');
    textTitle.innerText = bookObject.title;

    // Create h4 element for author
    const textAuthor = document.createElement('p');
    textAuthor.innerText = `Author: ${bookObject.author}`;

    // Create h4 element for year 
    const textYear = document.createElement('p');
    textYear.innerText = `Tahun: ${bookObject.year}`;

    // Append title and author elements to the container
    bookContainer.appendChild(textTitle);
    bookContainer.appendChild(textAuthor);
    bookContainer.appendChild(textYear);

    // Create action div for buttons
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');

    // Create buttons add for actions
    const completeButton = document.createElement('button');
    completeButton.classList.add('green');
    completeButton.innerText = bookObject.isComplete ? 'Belum selesai di Baca' : 'Selesai dibaca';

    // Create buttons delete for actions
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('red');
    deleteButton.innerText = 'Hapus buku';

    // Append buttons to the action div
    actionDiv.appendChild(completeButton);
    actionDiv.appendChild(deleteButton);

    // Append the action div to the container
    bookContainer.appendChild(actionDiv);
    
    return bookContainer;
    }
});

