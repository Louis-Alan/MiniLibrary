let cont = document.getElementsByClassName("container");

function displayBooks() {
    fetch('http://192.168.0.103:8080/api/v1/Book')
        .then(response => response.json())
        .then(data => {
            const books = data; // Assuming the response is assigned to a variable named 'data'

            // Iterate through each book and create HTML elements
            books.forEach(i => {

                cont[0].innerHTML += `<div> <span class="remove-book"> X </span> <p>Title: "${i.title}" </p> <p>Author: "${i.author}"</p> <p>Pages: ${i.pages}</p> <p>Status: ${i.status}</p> </div>`

            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

displayBooks();