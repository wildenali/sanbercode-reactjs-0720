// -------------------- Soal 1 Start --------------------
let pi = 22/7;
let jariJari = 5;

var luasLingkaran = (phi, radius) => {
  return phi * radius * radius;
}
console.log(luasLingkaran(pi, jariJari));

var kelilingLingkaran = (phi, radius) => {
  return 2 * phi * radius;
}
console.log(kelilingLingkaran(pi, jariJari));
// -------------------- Soal 1 End --------------------

// -------------------- Soal 2 Start --------------------
let a = "saya"
let b = "adalah"
let c = "seorang"
let d = "frontend"
let e = "developer"

let kalimat = `${a} ${b} ${c} ${d} ${e}`
console.log(kalimat);
// -------------------- Soal 2 End --------------------

// -------------------- Soal 3 Start --------------------
class Book {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
}
class Komik extends Book {
  constructor(name, totalPage, price, isColor) {
    super(name, totalPage, price);
    this.isColor = isColor;
  }
}

komikConan = new Komik('Conan', 300, 5200, true)
console.log(komikConan);
// -------------------- Soal 3 End --------------------