var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Function Declaration
function buatObjectBook(name, timeSpent){
  var book = {};
  book.name = name;
  book.timeSpent = timeSpent;
  return book;
}

var buku0 = buatObjectBook(books[0].name, books[0].timeSpent);
var buku1 = buatObjectBook(books[1].name, books[1].timeSpent);
var buku2 = buatObjectBook(books[2].name, books[2].timeSpent);

readBooksPromise(10000, buku0);
readBooksPromise(10000, buku1);
readBooksPromise(10000, buku2);