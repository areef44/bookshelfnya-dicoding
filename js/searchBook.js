const searchBooks = () => {
    const searchValue = document.getElementById("searchBookTitle").value.toLowerCase();
    const incompleteBooksList = document.getElementById('incompleteBookshelfList');
    const completeBooksList = document.getElementById('completeBookshelfList');

    // Clear the bookshelves
    incompleteBooksList.innerHTML = "";
    completeBooksList.innerHTML = "";

    if (searchValue) {
        const filteredBooks = books.filter((bookObject) => bookObject.title.toLowerCase().includes(searchValue));

        for (bookObject of filteredBooks) {
            const newBook = makeBooks(bookObject);

            if (bookObject.isComplete === true) {
                completeBooksList.append(newBook);
            } else {
                incompleteBooksList.append(newBook);
            }
        }
    } else {
        // If search is empty, display all books
        for (bookObject of books) {
            const newBook = makeBooks(bookObject);

            if (bookObject.isComplete === true) {
                completeBooksList.append(newBook);
            } else {
                incompleteBooksList.append(newBook);
            }
        }
    }

    return books;
}