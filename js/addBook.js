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

    saveData();

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