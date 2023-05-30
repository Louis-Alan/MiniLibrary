let myLib = [];
let count = 0;
let cont = document.getElementsByClassName("container");

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () { return (title + " by " + author + ", " + pages + " pages, " + status); }
}

const a = new book("The Hobbit", "J.R.R. Tolkein", "295", "not read yet ");
const b = new book("Peanuts", "Charles Schulz", "75", "read");

function pushDocument(){
    cont[0].innerHTML = ""
    myLib.forEach((i) => {
        cont[0].innerHTML += `<div> <p>Title: ${i.title} </p> <p>Author: ${i.author}</p> <p>Pages: ${i.pages}</p> <p>Status: ${i.status}</p> </div>`
    }
    )
}

function addBookToLibrary(newbook) {
    myLib.push(newbook);
    pushDocument()
}
addBookToLibrary(b)
