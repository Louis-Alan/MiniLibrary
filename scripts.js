let myLib = [];
let count = 0;

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () { return (title + " by " + author + ", " + pages + " pages, " + status); }
}

const a = new book("The Hobbit", "J.R.R. Tolkein", "295", "not read yet ");
const b = new book("Peanuts", "Charles Schulz", "75", "read");

function addBookToLibrary(newbook) {
    myLib.push(newbook);
}

let cont = document.getElementsByClassName("container");
console.log(cont[0].innerHTML)

cont[0].innerHTML += `<div> <p>Title: ${b.title} </p> <p>Author: ${b.author}</p> <p>Pages: ${b.pages}</p> <p>Status: ${b.status}</p> </div>`
