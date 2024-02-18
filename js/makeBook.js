// function make books
function makeBooks(bookObject) { 
    const container = document.createElement('div');
    container.classList.add('book_item');

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
    container.appendChild(textTitle);
    container.appendChild(textAuthor);
    container.appendChild(textYear);

    container.setAttribute('id', `books-${bookObject.id}`);

    // Create action div for buttons
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');
  

    if (bookObject.isComplete === false) {
         // Create green button for incomplete books
        const uncompleteButton = document.createElement('button');
        uncompleteButton.classList.add('green');
        uncompleteButton.addEventListener('click', function(){
            changeToComplete(bookObject.id);
        });
        uncompleteButton.innerText = 'Selesai di Baca';
        actionDiv.appendChild(uncompleteButton);
    } else {
         // Create green button for complete books
         const completeButton = document.createElement('button');
         completeButton.classList.add('green');
         completeButton.addEventListener('click', function() {
            changeToUncomplete(bookObject.id);
         });
         completeButton.innerText = 'Belum selesai di Baca';
         actionDiv.appendChild(completeButton);
    }

     // Create red button for deleting books
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('red');
    deleteButton.innerText = 'Hapus buku';
    deleteButton.addEventListener('click', function () {
        deleteBook(bookObject.id);
    });

    // Append action buttons to the container
    actionDiv.appendChild(deleteButton);
    container.appendChild(actionDiv);
    
    // return book container
    return container;

}