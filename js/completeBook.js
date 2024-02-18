function changeToComplete(bookId){

    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = true; 

    document.dispatchEvent(new Event(RENDER_EVENT));

    saveData();

}

function changeToUncomplete(bookId){

    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = false; 

    document.dispatchEvent(new Event(RENDER_EVENT));

    saveData();
}