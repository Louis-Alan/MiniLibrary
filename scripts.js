let myLib = [{title:"The Hobbit", author:"J.R.R Tolkein",pages:295,status:"Read"}];
let count = 0;
let cont = document.getElementsByClassName("container");
let btn = document.getElementById("AddBooks")
let over = document.getElementById("overlay");
let formCont = document.getElementById("formCont")
let Form = document.querySelector(".subForm")

console.log(btn);

btn.addEventListener("click", () =>{
    over.classList.add("active")
    formCont.classList.add("active")
})

// I'm using "click" but it works with any event
document.addEventListener('click', event => {
    const isClickInside = formCont.contains(event.target) || btn.contains(event.target)
    if (!isClickInside) {
      over.classList.remove("active")
      formCont.classList.remove("active")
      let m = document.getElementById("Title").value;
    }
})

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () { return (title + " by " + author + ", " + pages + " pages, " + status); }
}

function pushDocument(){
    cont[0].innerHTML = ""
    myLib.forEach((i) => {
        cont[0].innerHTML += `<div> <span class="remove-book"> X </span> <p>Title: "${i.title}" </p> <p>Author: "${i.author}"</p> <p>Pages: ${i.pages}</p> <p>Status: ${i.status}</p> </div>`
    }
    )
}

function addBookToLibrary(newbook) {
    myLib.push(newbook);
    pushDocument()
}
// addBookToLibrary(b)

Form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("HEllo");
    let tit = document.getElementById("Title").value;
    let aut = document.getElementById("Author").value;
    let pag = (document.getElementById("Pages").value);
    let read = document.getElementById("Read").checked?"Read":"Not read yet";
    let nb = new book(tit,aut,pag,read);
    addBookToLibrary(nb);
    Form.reset();
  });

pushDocument()