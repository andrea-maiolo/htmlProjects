//this is going to be y library
let library = [];

//this function will add books to the library
function addBooks(title,author,pages,read){
    let myBook = new Book(title,author,pages, read);
    library.push(myBook);
}


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
