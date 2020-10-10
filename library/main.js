//this is going to be y library
let library = [];

//this function will add books to the library
function addBooks(title,author,pages,read){
    let myBook = new Book(title,author,pages, read);
    library.push(myBook);
}

//display the library
const display = document.querySelector('.shelf');
const page = document.createElement('p');
var b = document.createElement('p');
function showMe(library) {
    for(let i=0;i<library.length;i++){
        b.textContent = library[i].info();
        display.appendChild(b)
    }
    
}
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the 
// new book: author, title, number of pages, whether it’s been read and anything else you might want.

const buttonNewBook =document.querySelector('#addNewBook');
const form = document.querySelector('#form');
buttonNewBook.addEventListener('click', () => form.style.display('inline-block') )

//this is the construct for the books
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let r;
        if(read === true){
            r = "read already"
        }else{
            r = "not read yet"
        }
        return   `${title} by ${author}, ${pages} pages, ${r}`
    }
}

const book1 = new Book("lo hobbit" , "dostoiewski" , 345 , true);
