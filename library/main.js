//this is going to be our library
let library = [];

//variabels form form 
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
//this is for the display so we can add books on the shelf
const display = document.querySelector('#display')
//radio buttons
const statusRead = document.querySelector('#statusRead');
const statusToRead = document.querySelector('#statusToRead');
//this show the form when clicked
const formAddingBook = document.querySelector('#formAddingBook');
//this is to show the form for adding a book
const addNewBook = document.querySelector('#addNewBook');
addNewBook.addEventListener('click', ()=>{formAddingBook.style.display ="block"; adding.style.display = "block"})
//this button will actually add the books on the shelf
const adding = document.querySelector('#adding');
adding.addEventListener('click',addingToLibrary);
//this function append the books as p elements on the screen
function addingToLibrary(){
    if((title.value!= '' && author.value!= ''&& pages.value!= '') && (statusRead.checked || statusToRead.checked)){
        if(statusRead.checked){
            var stat = true;
        }else if(statusToRead.checked){
            stat = false;
        }  
    let newB = new Book(title.value, author.value, pages.value,stat );
    library.push(newB)
    showMe(newB)
    }}

//show me the library
function showMe(element){
    let myBook =document.createElement('div');
    myBook.classList.add("books");
    let myBookTitle =document.createElement('p');
    myBookTitle.innerHTML = element.title;
    let myBookAuthor =document.createElement('p');
    myBookAuthor.innerHTML = element.author;
    let myBookPages =document.createElement('p');
    myBookPages.innerHTML = element.pages;
    let myBookInfo = document.createElement('button');
    myBookInfo.addEventListener('click',()=> {alert(element.info())})
    myBookInfo.innerHTML = "Info";
    let myBookStatus = document.createElement('button');
    myBookStatus.innerHTML= element.read;
     //this show the formwill set the button status color
     if(myBookStatus.innerHTML == "true"){
        myBookStatus.style.background= "green";
    }else{
        myBookStatus.style.background= "red";
    };
    myBookStatus.addEventListener("click", color);
    //create a button that can remove the books from library
    let removeButton = document.createElement('button');
    removeButton.innerHTML="x";
    removeButton.classList.add("remB")
    removeButton.addEventListener('click', () => {display.removeChild(myBook); cleanLibrary(myBook)});
    myBook.appendChild(removeButton)
    myBook.appendChild(myBookTitle);
    myBook.appendChild(myBookAuthor);
    myBook.appendChild(myBookPages);
    myBook.appendChild(myBookStatus)
    myBook.appendChild(myBookInfo);
    display.appendChild(myBook); 
}

//this is to remove the  book from the library array
  function cleanLibrary(ele){
    let index = library.indexOf(ele);
      library.splice(index, 1);
}

 //this show the formwill set the button status color
 function color(e){
    if(this.innerHTML == "true"){
        this.style.background= "red";
        this.innerHTML = "false";
    }else{
        this.style.background= "green";
        this.innerHTML  = "true";
    }
}

//this is the construct for the books, all our books need to becreated from here
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