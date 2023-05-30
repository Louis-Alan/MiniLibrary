let myLib = [];
let count = 0;
let cont = document.getElementsByClassName("container");
let btn = document.getElementById("AddBooks")
let over = document.getElementById("overlay");
let formCont = document.getElementById("formCont")

console.log(btn);

btn.addEventListener("click", () =>{
    over.classList.add("active")
    formCont.classList.add("active")
})

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

// I'm using "click" but it works with any event
document.addEventListener('click', event => {
  const isClickInside = formCont.contains(event.target) || btn.contains(event.target)
  if (!isClickInside) {
    over.classList.remove("active")
    formCont.classList.remove("active")
    let m = document.getElementById("Title").value;
    console.log(m)
    // The click was OUTSIDE the specifiedElement, do something
  }
})