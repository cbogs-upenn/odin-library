"use strict";

// Odin Project | Intermediate JS Course 
// Library Project
// by Christopher Bogs (cbogs@upenn.edu)

const myLibrary = [];
const runtime = true;


// set up the modal for adding books
const addBookForm = document.querySelector('#newbookform');
const addBookFormDialog = document.querySelector('#addbookmodal');
const addBookButton = document.querySelector('#addbookbtn');
const cancelAddBook = document.querySelector('#cancelbtn');
const createBook = document.querySelector('#createbookbtn');
// to show form
addBookButton.addEventListener("click", () => {
    addBookFormDialog.showModal();
});
// to add book
addBookForm.addEventListener("submit", createNewBook);
// to cancel form
cancelAddBook.addEventListener("click", () => {
    addBookFormDialog.close();
});



// Set up some books to start up, so we can see what it's doing

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const theSpiralDance = new Book("The Spiral Dance: A Rebirth of the Ancient Religion of the Great Goddess", "Starhawk", 326, true);
const qabalahForWiccans = new Book ("Qabalah for Wiccans: Ceremonial Magic on the Pagan Path", "Jack Chanek", 274, true);
const changeling = new Book("Changeling: A Book of Qualities", "Aidan Wachter", 240, false);
const consortingWithSpirits = new Book("Consorting with Spirits: Your Guide to Working with Invisible Allies", "Jason G. Miller", 240, false);

myLibrary.push(theHobbit);
myLibrary.push(theSpiralDance);
myLibrary.push(qabalahForWiccans);
myLibrary.push(changeling);
myLibrary.push(consortingWithSpirits);

//Display the library

   displayBooks();






//FUNCTIONS


function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;

    this.info = function(){

        let readStatus = "";

        if (read){
            readStatus = "read";            
        } else {
            readStatus = "not read yet";
        }
 
        const bookInfo = title + " by " + author + ", " + pageCount + " pages, " + readStatus;

        return bookInfo;
    }

}

function addBooktoLibrary(){
    let readStatus = undefined;
    let title = prompt("Title?");
    let author = prompt ("Author?");
    let pageCount = prompt ("Number of pages?");
    do {
            let readRequest = prompt ("Have you read it? Y/N?");
            if ((readRequest === "y")||(readRequest === 'Y')){
                readStatus = true;
            } else if ((readRequest === "n")||(readRequest === "N")){
                readStatus = false;
            } else {
                readStatus = undefined;
            }
        } while (readStatus === undefined);

        console.log (title + ", " + author + ", " + pageCount + ", " + readStatus);

    const newBook = new Book(title, author, Number(pageCount), readStatus);
    myLibrary.push(newBook);
       
}

function displayBooks(){

    //first destroy existing cards so we don't just pile the new ones on
    destroyBookCards();

    let divNumber = 0;
    let readIcon = '';
    const bookCards = document.querySelector(".book-cards");

        for (let i = 0; i <= myLibrary.length - 1; i++){

        
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookcard');
        bookCard.setAttribute('id', 'libraryindex'+ divNumber);
        const bookDetails = document.createElement('div');
        const bookCardTitle = document.createElement('div');
        bookCardTitle.classList.add('booktitle');
        const bookCardAuthor = document.createElement('div');
        bookCardAuthor.classList.add('bookauthor');
        const bookCardPageCount = document.createElement('div');
        bookCardPageCount.classList.add('bookpagecount');
        const bookCardReadIcon = document.createElement('img');
        bookCardReadIcon.classList.add('bookcardreadicon');
        const bookCardDeleteIcon = document.createElement('img');
        bookCardDeleteIcon.classList.add('bookcarddeleteicon');

        let bookTitle = myLibrary[i].title;
        let bookAuthor = myLibrary[i].author;
        let bookPageCount = myLibrary[i].pageCount;
        let bookReadStatus = myLibrary[i].read;
        
        if(!bookReadStatus){
            bookCard.classList.add('unread');
            bookCardReadIcon.setAttribute('src', "./icons/book-off.svg");
            bookCardReadIcon.setAttribute('height', 20);
        } else {
            bookCard.classList.add('read');
            bookCardReadIcon.setAttribute('src', "./icons/book-open-page-variant.svg");
            bookCardReadIcon.setAttribute('height', 20);
        }

        bookCardTitle.textContent = bookTitle;
        bookCardAuthor.textContent = "by " + bookAuthor;
        bookCardPageCount.textContent = bookPageCount + " pages";
        
        bookCardDeleteIcon.setAttribute('src', "./icons/book-minus.svg");
        bookCardDeleteIcon.setAttribute('height', 20);

        bookDetails.appendChild(bookCardTitle);
        bookDetails.appendChild(bookCardAuthor);
        bookDetails.appendChild(bookCardAuthor);
        bookDetails.appendChild(bookCardPageCount);

        bookCard.appendChild(bookDetails);
        bookCard.appendChild(bookCardDeleteIcon);
        bookCard.appendChild(bookCardReadIcon);
        
        bookCards.appendChild(bookCard);

        divNumber++;
        
    }
}

function addBookModal() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
    dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
    dialog.close();
    });

}

function createNewBook(event){
   
    const formData = new FormData(addBookForm);

    let formTitle = "";
    let formAuthor = "";
    let formPageCount = 0;
  
    formTitle = formData.get("title");
    formAuthor = formData.get("author");
    formPageCount = formData.get("pagecount");

    if ((formTitle === "") || (formAuthor === "")){

        addBookFormDialog.close();
        event.preventDefault();
        return;
    }

    console.log(formTitle + ", " + formAuthor + ", " + formPageCount);
 
    const newBook = new Book(formTitle, formAuthor, Number(formPageCount), false);
    myLibrary.push(newBook);

    addBookFormDialog.close();
    
    event.preventDefault(); //PUT THE EVENT LISTENER ON THE FORM, NOT THE DAMN BUTTON

    displayBooks();
  
}

function destroyBookCards(){

    const bookCards = Array.from(document.querySelectorAll(".bookcard"));
    const bookCard = document.querySelector(".book-cards");

    for (let i = 0; i < bookCards.length; i++){
        console.log(bookCards[i]);
        bookCard.removeChild(bookCards[i]);
    }


}