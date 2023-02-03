// picking ui element 
let form = document.querySelector("#book-form");
let booklist = document.querySelector("#book-list");



// Boook Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class 
class UI {
   
    addBookList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
    }
    clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
    showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 1000);

    }

    deleteBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
       
        }
    }
}


// Event listener

form.addEventListener('submit', newBook);
booklist.addEventListener("click", removeBook);




// Functions

function newBook(e) {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;

    


    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill up the fields!", "error");
    }
    else {
        let book = new Book(title, author, isbn);
        let ui = new UI();
        ui.addBookList(book);
        ui.clearFields();
        ui.showAlert("book added", "success");

    }


    // console.log(book);
    e.preventDefault();
}


function removeBook(e) {
    let ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book removed", "success");
    e.preventDefault();
}