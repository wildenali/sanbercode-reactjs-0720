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

var buku = buatObjectBook(books[0].name, books[0].timeSpent);
console.log(buku);

function sisaWaktu(waktu) {
  console.log(`Sisa waktu ${waktu}`);
}

readBooks(10000, buku, sisaWaktu);