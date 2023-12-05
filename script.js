"use strict";

// Odin Project | Intermediate JS Course 
// Library Project
// by Christopher Bogs (cbogs@upenn.edu)

const myLibrary = [];

// Do some stuff so we can see some stuff

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

//addBooktoLibrary();

console.log(myLibrary);

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

    let divNumber = 0;
    const bookCards = document.querySelector(".book-cards");

        for (let i = 0; i <= myLibrary.length - 1; i++){

        const bookCard = document.createElement('div');
        bookCard.classList.add('bookcard');

        let bookTitle = myLibrary[i].title;
        let bookAuthor = myLibrary[i].author;
        let bookPageCount = myLibrary[i].pageCount;
        let bookReadStatus = myLibrary[i].read;
        
        if(!bookReadStatus){
            bookCard.classList.add('unread');
        }

        bookCard.textContent = bookTitle + " " + bookAuthor + " " + bookPageCount;
        
        bookCards.appendChild(bookCard);
        
    }
}
