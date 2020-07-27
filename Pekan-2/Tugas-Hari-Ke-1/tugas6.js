console.log("---------------- Soal 1 start ----------------");
var arrayDaftarPeserta = {
  nama: 'Asep',
  jenisKelamin: 'laki-laki',
  hobi: 'baca buku',
  tahunLahir: 1992
}
console.log(arrayDaftarPeserta);
console.log("---------------- Soal 1 end ----------------\n");

console.log("---------------- Soal 2 start ----------------");
var mobil = [
  {nama: "strawberry", warna: "merah", biji: "tidak", harga: 9000},
  {nama: "jeruk", warna: "orange", biji: "ada", harga: 8000},
  {nama: "Semangka", warna: "Hijau & Merah", biji: "ada", harga: 10000},
  {nama: "Pisang", warna: "Kuning", biji: "tidak", harga: 5000}
]
console.log(mobil[0]);
console.log("---------------- Soal 2 end ----------------\n");

console.log("---------------- Soal 3 start ----------------");
var film = [
  {nama: "Dil Bechara", durasi: "1h 41min", genre: "Comedy", tahun: 2020},
  {nama: "Chhichhore", durasi: "2h 23min", genre: "Drama", tahun: 2019},
  {nama: "Dark", durasi: "1h 0min", genre: "Crime", tahun: 2017}
]
var dataFilm = film.map(function(item){
  return item;
})
console.log(dataFilm);
console.log("---------------- Soal 3 end ----------------\n");

console.log("---------------- Soal 4 start ----------------");
class Animal {
  constructor(name, legs, cold_blooded) {
    this.legs = 4
    this.cold_blooded = false
    this.name = name
  }
  get cnam() {
    return this.name;
  }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


class Ape extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name);
    this.legs = 2
    this.name = name
  }
  yell() {
    return console.log('Auooo');
  }
}
var sungokong = new Ape("kera sakti");
// console.log(sungokong.name);
sungokong.yell();

class Frog extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name);
    this.legs = 4
    this.name = name
  }
  jump() {
    return console.log('hop hop');
  }
}
var kodok = new Frog("buduk");
// console.log(kodok.name);
kodok.jump();

console.log("---------------- Soal 4 end ----------------\n");