// function make books
function makeBooks(bookObject) { 

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
    deleteButton.addEventListener('click', function () {
        deleteBook(bookObject.id);
    })

    // Append buttons to the action div
    actionDiv.appendChild(completeButton);
    actionDiv.appendChild(deleteButton);

    // Append the action div to the container
    bookContainer.appendChild(actionDiv);
    
    // return book container
    return bookContainer;

}