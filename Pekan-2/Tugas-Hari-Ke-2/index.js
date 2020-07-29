var readBooks = require('./callback.js')

var books = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000},
  {name: 'Komik', timeSpent: 1000},
]

function sisaWaktu(waktu) {
  console.log(`Sisa waktu ${waktu}`);
}

readBooks(10000, books, sisaWaktu);