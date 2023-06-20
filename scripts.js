let myLib = [{ title: "The Hobbit", author: "J.R.R Tolkein", pages: 295, status: "Read" }];
let count = 0;
let cont = document.getElementsByClassName("container");
let btn = document.getElementById("AddBooks")
let over = document.getElementById("overlay");
let formCont = document.getElementById("formCont")
let Form = document.querySelector(".subForm")
let spanEle = document.getElementsByClassName("remove-book")

console.log(btn);

btn.addEventListener("click", () => {
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

function pushDocument() {
    fetch('http://192.168.0.103:8080/api/v1/Book')
      .then(response => response.json())
      .then(data => {
        const books = data; // Assuming the response is assigned to a variable named 'data'
  
        // Clear the container first
        cont[0].innerHTML = '';
  
        // Iterate through each book and create HTML elements
        books.forEach(i => {
          cont[0].innerHTML += `<div> <span class="remove-book"> X </span> <p>Title: "${i.title}" </p> <p>Author: "${i.author}"</p> <p>Pages: ${i.pages}</p> <p>Status: ${i.status}</p> </div>`
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  Form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let title = document.getElementById("Title").value;
    let author = document.getElementById("Author").value;
    let pages = parseInt(document.getElementById("Pages").value);
    let status = document.getElementById("Read").checked ? "Read" : "Unread";
  
    let bookData = {
      title: title,
      author: author,
      pages: pages,
      status: status
    };
  
    fetch("http://192.168.0.103:8080/api/v1/Book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData)
    })
      .then(response => {
        if (response.ok) {
          console.log("Book added successfully!");
          // Perform any additional actions after adding the book
          pushDocument(); // Reread the JSON file to get updated details
        } else {
          console.error("Error:", response.statusText);
        }
      })
      .catch(error => console.error("Error:", error));
  
    Form.reset();
  });

pushDocument()

let spanElements = document.getElementsByClassName("remove-book");

for (let i = 0; i < spanElements.length; i++) {

    spanElements[i].addEventListener('click', function(event) {
    let parentDiv = event.target.parentNode;

    let titleElement = parentDiv.querySelector("p:first-of-type");
    if (titleElement) {
      let title = titleElement.textContent.replace("Title: ", "");
      console.log("Span element clicked");
      console.log("Title:", title);
    } else {
      console.log("Title element not found.");
    }
  });
}
