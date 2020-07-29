var readBooks = require('./callback.js')

var books = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000},
  {name: 'Komik', timeSpent: 1000},
]

// Function Declaration
function buatObjectBook(name, timeSpent){
  var book = {};
  book.name = name;
  book.timeSpent = timeSpent;
  return book;
}

var buku0 = buatObjectBook(books[0].name, books[0].timeSpent);
// console.log(buku0);

var buku1 = buatObjectBook(books[1].name, books[1].timeSpent);
// console.log(buku1);

var buku2 = buatObjectBook(books[2].name, books[2].timeSpent);
// console.log(buku2);

var buku3 = buatObjectBook(books[3].name, books[3].timeSpent);
// console.log(buku3);


function sisaWaktu(waktu) {
  console.log(`Sisa waktu ${waktu}`);
}

readBooks(10000, buku0, sisaWaktu);
readBooks(10000, buku1, sisaWaktu);
readBooks(10000, buku2, sisaWaktu);
readBooks(10000, buku3, sisaWaktu);