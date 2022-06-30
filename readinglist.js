let myBookList =[];

let book = {
    // dateAdded: document.querySelector(""),
    title:"",
    genre: "",
    author:"",
    rating:"",
    readOrNot:""
}

//first step modifies data structure, second step rerenders list reflecting new changes

function newBook () {
    const template = document.querySelector("#bookForm template");
    const clone = template.content.cloneNode(true);
    const time = Date.now();
    const dateToday = new Date();
    const day = dateToday.getDate();
    const month = dateToday.getMonth();
    const year = dateToday.getFullYear();
    const fullDate = (day + "-" + month + "-" + year)
    const ids = clone.querySelectorAll("[id], [for], [name]"); //selects any elements that have id and for attributes
        for (const el of ids) {
            if (el.hasAttribute("id")) {
                el.id += time;
            }
            if (el.hasAttribute("for")) {
                el.setAttribute("for", el.getAttribute("for") + time)
            }
            if (el.hasAttribute("name")) {
                el.setAttribute("name", el.getAttribute("name") + time)
            }
        }
    document.getElementById("formArea").appendChild(clone);


    document.getElementById("date").innerText.append = fullDate;
}

document.getElementById("newBook").addEventListener("click", newBook);


// function bookAddDate () {
//     let day = getDate();
//     let month = getMonth();
//     let year = getFullYear();
//     let fullDate = (day + "-" + month + "-" + year)

//     if (document.getElementById("newBook").addEventListener("click", newBook)) {
//         document.getElementById("date").innerText = fullDate;
//     }
// }








//hover Events
let mini = true;
function toggleSidebar() {
    if (mini) {
        document.getElementsByClassName("left").style.width = "250px";
        document.getElementsByClassName("right").style.marginLeft = "250px";
        this.mini = false;
    } else {
        document.getElementByClassName("left").style.width = "75px";
        document.getElementsByClassName("right").style.marginLeft = "75px";
        this.mini = true;
    }
}



//cloning duplicating user input data
//saving a "state" of the app?
//@media screen and (min-width: 769px) "media query"
//@media (prefers-color-scheme: dark)






//date questions
//array questions