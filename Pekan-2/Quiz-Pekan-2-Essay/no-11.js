function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function(resolve, reject) {
    var books = [
      {name: "shinchan", totalPage: 50, isColorful: true},
      {name: "Kalkulus", totalPage: 250, isColorful: false},
      {name: "doraemon", totalPage: 40, isColorful: true},
      {name: "algoritma", totalPage: 300, isColorful: false},
    ]
    if (amountOfPage > 0) {
      resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
    } else {
      var reason = new Error("Maaf parameter salah")
      reject(reason);
    }
  })
}

filterBooksPromise(true, 50).then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Gagal", error);
})

filterBooksPromise(true, 10).then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Gagal", error);
})

filterBooksPromise(true, 100).then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Gagal", error);
})

filterBooksPromise(false, 50).then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Gagal", error);
})

filterBooksPromise(false, 10).then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Gagal", error);
})

filterBooksPromise(false, 100).then(function(response) {
  console.log("Success", response);
}, function(error) {
  console.log("Gagal", error);
})

// filterBooksPromise(true, 0).then(function(response) {
//   console.log("Success", response);
// }, function(error) {
//   console.log("Gagal", error);
// })