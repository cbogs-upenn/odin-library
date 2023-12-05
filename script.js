"use strict";

const myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

myLibrary.push(theHobbit);

addBooktoLibrary();

console.log(myLibrary);



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