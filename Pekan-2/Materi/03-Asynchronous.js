// Test dulu
// setTimeout(function() {
//   console.log("Saya dijalankan belakangan");
// }, 3000)
// console.log("duluan ya");

// Periksa ke Dokter
function periksaDokter(nomerAntri, pengurangAntrian, callback) {
  setTimeout(
    function() {
      var sisaAntrian = 0;
      if (nomerAntri > 50) {
        sisaAntrian = nomerAntri - pengurangAntrian;
        console.log('Antrian sudah berkurang sebesar ' + pengurangAntrian);
        console.log('Sisa antrian ' + sisaAntrian);
      } else {
        console.log("Antrian sudah berkurang dari 50")
      }
    }, pengurangAntrian * 100
  )
}
periksaDokter(65, 5)

// Promise
var isMomHappy = true;

var willGetNewPhone = new Promise(function(resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: 'Samsung',
      color: 'black',
    };
    resolve(phone); // fulfilled atau ditepati janjinya
  } else {
    var reason = new Error('mom is not happy');
    reject(reason); // reject
  }
});

function askMom() {
  willGetNewPhone
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

// tanya mom
askMom()