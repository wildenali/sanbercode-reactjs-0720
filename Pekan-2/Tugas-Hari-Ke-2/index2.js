var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// const coba_1 = readBooksPromise(10000, books);
// coba_1
//     .then(() => console.log(coba_1))
//     .catch(() => console.log(coba_1))

console.log(readBooksPromise);
// function bacaBuku() {
//   readBooksPromise(books, 10000)
//   .then(function(fulfilled) {
//     console.log(fulfilled);
//   })
//   .catch(function(error) {
//     console.log(error.message);
//   });
// }

// bacaBuku(books);