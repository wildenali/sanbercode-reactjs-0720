function readBooks(time, book, callback) {
  // console.log(`waktunya ${time}`)
  // console.log(`bukunya ${book}`)
  console.log(`saya membaca ${book.name}`)
  setTimeout(function(){
      let sisaWaktu = 0
      if(time > book.timeSpent) {
          sisaWaktu = time - book.timeSpent
          console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
          callback(sisaWaktu) //menjalankan function callback
      } else {
          console.log('waktu saya habis')
          callback(time)
      }   
  }, book.timeSpent)
}

module.exports = readBooks 

// function greeting(name) {
//   console.log(`Hello ${name}, welcome to Scotch!`);
// }

// function readBooks(time, book, callback) {
//   console.log(`waktunya ${time}`)
//   console.log(`saya membaca ${book}`)
//   setTimeout(function(){
//       let sisaWaktu = 0
//       if(10000 > 2000) {
//           sisaWaktu = 10000 - 2000
//           console.log(`saya sudah membaca ${book}, sisa waktu saya ${sisaWaktu}`)
//           callback(sisaWaktu) //menjalankan function callback
//       } else {
//           console.log('waktu saya habis')
//           callback(10000)
//       }   
//   }, 2000)
// }

// readBooks(1000, 'wow', greeting);