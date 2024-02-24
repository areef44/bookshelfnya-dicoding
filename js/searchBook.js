const searchBooks = () => {
    // get title from book
    const searchValue = document.getElementById("searchBookTitle").value;
    const incompleteBooksList = document.getElementById('incompleteBookshelfList');
    const completeBooksList = document.getElementById('completeBookshelfList');
    const previousBooks = document.querySelectorAll(".book_item");


    if (searchValue) {
        // make bookshelf empty
        for (previousBook of previousBooks) {
            previousBook.remove();
        }

    const filteredBooks = books.filter((bookObject)=>bookObject.title.toLowerCase().includes(searchValue.toLowerCase()));

    for (bookObject of filteredBooks) {
         const newBook = makeBooks(bookObject);
         console.log(newBook);

            if (bookObject.isComplete === true) {
                completeBooksList.append(newBook);
            } else {
                incompleteBooksList.append(newBook);
            }
        }
            } else {
                for (previousBook of previousBooks) {
                    previousBook.remove();
            }
        loadDataFromStorage();
            }
    
    return books;
}