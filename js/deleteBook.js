function deleteBook(bookId) {
    
    const bookTarget = findBookIndex(bookId);

    if(bookTarget === -1) return;

    books.splice(bookTarget, 1);

    document.dispatchEvent(new Event(RENDER_EVENT));

    saveData();

}