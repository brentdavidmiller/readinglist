// debugger;
//App Variables
const dateToday = new Date();
const day = dateToday.getDate();
const month = dateToday.getMonth();
const year = dateToday.getFullYear();
const fullDate = (day + "-" + month + "-" + year);

class Book {

    constructor (dateAdded, title, author, genre, rating, isRead = false) {
        // this.id = Date.now();
        this.dateAdded = fullDate;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.rating = rating;
        this.isRead = isRead;
    }

    toHTML () {
        return`<div class="bookCard">
        <div class="cardHeader">
        <p id="date">Date: ${this.dateAdded}</p>
        <button id="editBtn">Save</button>
        </div>
        <div class="cardBody">
        <h1 id="cardTitle">New Book</h1>
        <label for="title">Title: </label>
        <input class="bookAttributes id="title" placeholder="Title"></input>
        <label for="author">Author: </label>
        <input class="bookAttributes id="author" placeholder="Author"></input>
        <label for="genre">Genre: </label>
        <input class="bookAttributes id="genre" placeholder="Genre"></input>
        <div id="rating">*****</div>
        <button id="readOrNot">Not Read</button>
        </div>
        </div>`;
    }
    toObj () {
        return {dateAdded: this.dateAdded, title: this.title, author: this.author, genre: this.genre, rating: this.rating, isRead: this.isRead}
    }
}

class List {
    
    constructor () {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    toHTML () {
        return this.books.map(book => book.toHTML()).join("");
    }
}

const list = new List();
function renderBook () {
    list.addBook(new Book());
    document.querySelector(".bookListArea").innerHTML = list.toHTML();
    document.querySelector("#editBtn").addEventListener("click", editAttributes);
    document.querySelector("#readOrNot").addEventListener("click", toggleRead);
}

document.querySelector("#bookBtn").addEventListener("click", renderBook);

//functions
let isEditing = true;
function editAttributes () {
    const inputs = document.querySelectorAll(".bookAttributes");
    let length = inputs.length;
    if (isEditing === true) {
        isEditing = false;
        for (let i = 0 ; i < length; i++) {
            inputs[i].disabled = true;
            inputs[i].style.color = "white";
            inputs[i].style.backgroundColor = "transparent";
            inputs[i].style.border = "none";
            document.querySelector("#editBtn").textContent = "Edit";
        }
    } else if (!isEditing) {
        isEditing = true;
        for (let i = 0 ; i < length; i++) {
            inputs[i].disabled = false;
            inputs[i].style.color = "black";
            inputs[i].style.backgroundColor = "white";
            inputs[i].style.border = "1px solid grey";
            document.querySelector("#editBtn").textContent = "Save";
        }
    }
}

function toggleRead () {
    const readBtn = document.querySelector("#readOrNot");
    btnStyle = window.getComputedStyle(readBtn);
    if (btnStyle.getPropertyValue("background-color") === "rgb(255, 0, 0)") {
        readBtn.style.backgroundColor = "rgb(0, 128, 0)";
        readBtn.innerText = "Read";
    } else if (btnStyle.getPropertyValue("background-color") === "rgb(0, 128, 0)"){
        readBtn.style.backgroundColor = "rgb(255, 0, 0)";
        readBtn.innerText = "Not Read";
    }
};


// function changeRating () {
// }































// class Book {
//     constructor(
//         dateAdded = "none",
//         title = "Unknown",
//         author = "Uknown",
//         genre = "Unknown",
//         rating = "none",
//         isRead = false
//     ) {
//         this.dateAdded = dateAdded;
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.rating = rating;
//         this.isRead = isRead;
//     }
// }

// class Library {
//     constructor() {
//         this.books = []
//     }
//     addBook(newBook) {
//         if (!this.isInLibrary(newBook)) {
//             this.books.push(newBook)
//         }
//     }
// }

// const library = new Library();
 










// const createBookCard = () => {
//     //elements
//     const bookCard = document.createElement("div");
//     const dateAdded = document.createElement("p");
//     const title = document.createElement("input"); //content editable
//     const author = document.createElement("input"); //disable input and styling
//     const genre = document.createElement("input");
//     const rating = document.createElement("div");
//     const buttonArea = document.createElement("div");
//     const readButton  = document.createElement("button");
//     const removeButton = document.createElement("button");


//     bookCard.classList.add("bookCard");
//     buttonArea.classList.add("buttonArea");
//     readButton.classList.add("cardButton");
//     removeButton.classList.add("cardButton");

//     // dateAdded.textContent = `"${book.dateAdded}"`
//     // title.value = book.title;
//     // author.value = book.author;
//     // genre.value = book.genre;
//     // removeButton.textContent = "Remove";

//     // if (book.isRead) {
//     //     readButton.textContent = "Read"
//     //     readButton.classList.add("button-light-green")
//     // } else {
//     //     readButton.textContent = "Not read"
//     //     readButton.classList.add("button-light-red")
//     // }

//     // bookCard.appendChild(dateAdded);
//     // bookCard.appendChild(title);
//     // bookCard.appendChild(author);
//     // bookCard.appendChild(genre);
//     // bookCard.appendChild(rating);
//     // buttonArea.appendChild(readButton);
//     // buttonArea.appendChild(removeButton);
//     // bookCard.appendChild(buttonArea);
//     // booksGrid.appendChild(bookCard);

//     document.querySelector(".bookCardArea").appendChild(bookCard);
//     bookCard.textContent = "hello";
// }

// document.getElementById("bookBtn").addEventListener("click", createBookCard);
























// const addBook = (e) => {
//     e.preventDefault()
//     const newBook = getBookFromInput()

//     if (library.isInLibrary(newBook)) {
//         errorMsg.textContent = "This book already exists in your library";
//         errorMsg.classList.add("active");
//         return
//     }

//     if (auth.currentUser) {
//         addBookDB(newBook);
//     } else {
//         library.addBook(newBook);
//         saveLocal();
//         updateBooksGrid();
//     }

//     closeAddBookModal();
// }


// const accountBtn = document.getElementById('accountBtn')
// const accountModal = document.getElementById('accountModal')
// const addBookBtn = document.getElementById('addBookBtn')
// const addBookModal = document.getElementById('addBookModal')
// const errorMsg = document.getElementById('errorMsg')
// const overlay = document.getElementById('overlay')
// const addBookForm = document.getElementById('addBookForm')
// const booksGrid = document.getElementById('booksGrid')
// const loggedIn = document.getElementById('loggedIn')
// const loggedOut = document.getElementById('loggedOut')
// const loadingRing = document.getElementById('loadingRing')

// const setupNavbar = (user) => {
//     if (user) {
//       loggedIn.classList.add('active')
//       loggedOut.classList.remove('active')
//     } else {
//       loggedIn.classList.remove('active')
//       loggedOut.classList.add('active')
//     }
//     loadingRing.classList.remove('active')
//   }
//   const setupAccountModal = (user) => {
//     if (user) {
//       accountModal.innerHTML = `
//         <p>Logged in as</p>
//         <p><strong>${user.email.split('@')[0]}</strong></p>`
//     } else {
//       accountModal.innerHTML = ''
//     }
//   }
//   const openAddBookModal = () => {
//     addBookForm.reset()
//     addBookModal.classList.add('active')
//     overlay.classList.add('active')
//   }
//   const closeAddBookModal = () => {
//     addBookModal.classList.remove('active')
//     overlay.classList.remove('active')
//     errorMsg.classList.remove('active')
//     errorMsg.textContent = ''
//   }
//   const openAccountModal = () => {
//     accountModal.classList.add('active')
//     overlay.classList.add('active')
//   }
//   const closeAccountModal = () => {
//     accountModal.classList.remove('active')
//     overlay.classList.remove('active')
//   }
//   const closeAllModals = () => {
//     closeAddBookModal()
//     closeAccountModal()
//   }
//   const handleKeyboardInput = (e) => {
//     if (e.key === 'Escape') closeAllModals()
//   }
//   const updateBooksGrid = () => {
//     resetBooksGrid()
//     for (let book of library.books) {
//       createBookCard(book)
//     }
//   }
//   const resetBooksGrid = () => {
//     booksGrid.innerHTML = ''
//   }





// const getBookFromInput = () => {
//     const dateAdded = document.getElementById("dateAdded").value;
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const genre = document.getElementById("genre").value;
//     const isRead = document.getElementById("isRead").checked;
// }





// const removeBook = (e) => {
//     const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
//         '"',
//         ''
//     )

//     if (auth.currentUser) {
//         removeBookDB(title)
//     } else {
//         library.removeBook(title)
//         saveLocal()
//         updateBooksGrid()
//     }
// }

// const toggleRead = (e) => {
//     const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
//         '"',
//         ''
//     )
//     const book = library.getBook(title)

//     if (auth.currentUser) {
//         toggleBookIsReadDB(book)
//     } else {
//         book.isRead = !book.isRead
//         saveLocal()
//         updateBooksGrid()
//     }
// }
