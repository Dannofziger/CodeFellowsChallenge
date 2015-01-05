//Creating prototype for all libraries.
function Library(Name){
    this.name = Name;
    //array containing all shelves in library
    this.shelves = [];
    /*array containing all books in library.
    I made this separate from the shelves' book list,
    so a book can remain with the library regardless
    of whether it's shelved.*/
    this.books = [];
    /*Calls the names of all the books that
    have been added to the library*/
    this.bookAudit = function(){
        console.log(this.books);
    };
    /*Calls the number of shelves that have
    been added to the library*/
    this.shelfAudit = function(){
        console.log(this.shelves.length);
    };
}
//Creating prototype for all shelves.
function Shelf(Name){
    this.name = Name;
    this.books = [];
    /*Adds shelf to a library of choice, if it's not there already.
    Having more than one copy of a book may be ok, but one shelf
    can't be in two places.
    BUG: A specific shelf can exist in two different libraries at once.*/
    this.addToLib = function(library){
        if(library.books.indexOf(this.title) === -1){
            library.shelves[library.shelves.length] = this.name;
        }
    };
    //Removes shelf from library, if it's there
    this.removeFromLib = function(library){
        if(library.books.indexOf(this.title) != -1){
            library.shelves.splice(library.shelves.indexOf(this.name),1);
        }
    };
}
//Creating prototype for all books.
function Book(Name, Author, Genre){
    this.title = Name;
    this.author = Author;
    this.genre = Genre;
    //Add book to library
    this.addToLib = function(library){
            library.books[library.books.length] = this.title;
    };
    //Remove book from library, if it's there
    this.removeFromLib = function(library){
        if(library.books.indexOf(this.title) != -1){
            library.books.splice(library.books.indexOf(this.title),1);
        }
    };
    //Add book to shelf
    this.enshelf = function(shelf){
            shelf.books[shelf.books.length] = this.title;
    };
    //Remove book from shelf, if it's there.
    this.unshelf = function(shelf){
        if(shelf.books.indexOf(this.title) != -1){
            shelf.books.splice(shelf.books.indexOf(this.title),1);
        }
    };
}

/*Normally all of this would be handled by a simple
'submit' button that would create the new
books/shelves, but in lieu I just manually input these.*/
var Local = new Library("Local Library");
var Region = new Library("Regional Library");
var LocalFantasy = new Shelf("Fantasy");
var LocalNonFiction = new Shelf("NonFiction");
var RegionFantasy = new Shelf("Fantasy");
var LotR1 = new Book("Fellowship of the Ring", "J.R.R. Tolkien", "Fantasy");
var LotR2 = new Book("The Two Towers", "J.R.R. Tolkien", "Fantasy");
var LotR3 = new Book("The Return of the King", "J.R.R. Tolkien", "Fantasy");
var TLL = new Book("The Last Lion", "Paul Reid", "NonFiction");

LocalFantasy.addToLib(Local);
LocalNonFiction.addToLib(Local);
RegionFantasy.addToLib(Region);
LotR1.addToLib(Local);
//Tests multiple additions to library.
LotR1.addToLib(Local);
LotR1.enshelf(LocalFantasy);
LotR2.addToLib(Local);
LotR2.enshelf(LocalFantasy);
LotR3.addToLib(Local);
LotR3.enshelf(LocalFantasy);
TLL.addToLib(Local);
TLL.enshelf(LocalNonFiction);
LotR1.addToLib(Region);
LotR1.enshelf(RegionFantasy);
LotR1.unshelf(RegionFantasy);
//Tests removing book that isn't there.
LotR1.unshelf(RegionFantasy);

//Tests. Uncomment to run.

//Local.bookAudit();
//Local.shelfAudit();
//Region.bookAudit();
//Region.shelfAudit();
//console.log(Local.shelves);
//console.log(Region.shelves);
//console.log(LocalFantasy.books);
//console.log(RegionFantasy.books);
//console.log(LocalNonFiction.books);

