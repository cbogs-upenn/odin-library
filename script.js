"use strict";

const myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());



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
    //do stuff here
}