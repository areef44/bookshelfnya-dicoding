const INCOMPLETE_BOOKS_LIST = "incompleteBookshelfList";
const COMPLETE_BOOKS_LIST = "completeBookshelfList";

// function make books
function makeBooks(bookObject) { 

    // Create h3 element for book title
    const textTitle = document.createElement('h2');
    textTitle.innerText = bookObject.title;

    // Create h4 element for author
    const textAuthor = document.createElement('p');
    textAuthor.innerText = `Author: ${bookObject.author}`;

    // Create h4 element for year 
    const textYear = document.createElement('p');
    textYear.innerText = `Tahun: ${bookObject.year}`;
    
    // Set the id attribute to the bookId
    const textId = document.createElement('p');
    textId.innerText = `Id: ${bookObject.id}`;
    
    // Append title and author elements to the container
    const textContainer =  document.createElement("article");
    textContainer.classList.add("book_item");
    
    textContainer.dataset.bookId = bookObject.id; 
    // textContainer.id = `book_${bookObject.id}`;

    textContainer.append(textTitle, textAuthor, textYear, textId);

    const buttonContainer =  document.createElement("div");
    buttonContainer.classList.add("action");


    if (bookObject.isComplete === false) {
         // Create green button for incomplete books
         buttonContainer.append(createNotFinishedButton("Tandai Telah Dibaca",bookObject.id), createRedButton("Hapus",bookObject.id));
    } else {
         buttonContainer.append(createFinishedButton("Tandai Belum Dibaca",bookObject.id), createRedButton("Hapus",bookObject.id));
    }

    // Append action buttons to the container
    textContainer.append(buttonContainer);
    
    // return book container
    return textContainer;

}

const createNotFinishedButton = (text,bookId) => {
    const button = createButton("green", (e) => {
        const message = confirm("Apakah kamu telah selesai membaca buku ini?");
        if (message) {
            changeToComplete(bookId);
        }
    }, text);

    return button;
}

const createFinishedButton = (text,bookId) => {
    const button = createButton("green", (e) => {
        const message = confirm("Apakah kamu belum selesai membaca buku ini?");
        if (message) {
            changeToUncomplete(bookId);
        }
    }, text);

    return button;
}

const createRedButton = (text,bookId) => {
    const button = createButton("red", (e) => {
        const message = confirm("Apakah kamu ingin menghapus buku ini?");
        if (message) {
            deleteBook(bookId);
        }
    }, text);

    return button;
}

const createButton = (buttonTypeClass, eventListener, text) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add(buttonTypeClass);
    
    button.addEventListener("click", (e)=>{
        eventListener(e);
    });

    return button;
}