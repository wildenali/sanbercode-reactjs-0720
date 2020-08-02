class BangunDatar {
  constructor(nama)  {
    this._nama = nama;
  }

  get nama() {
    return this._nama.toUpperCase();
  }

  set nama(namaBaru) {
    this._nama = namaBaru;
  }
  
  luas() {
    return "";
  }

  keliling() {
    return "";
  }
}


class Lingkaran extends BangunDatar {
  constructor(nama, radius){
    super(nama);
    this.radius = radius;
    this.phi = 22/7
  }
  luas() {
    console.log('Luas ' + this.nama + ' ' + this.phi * this.radius * this.radius)
  }
  keliling() {
    console.log('Keliling ' + this._nama + ' ' + this.phi * this.radius * 2)
  }
}

class Persegi extends BangunDatar {
  constructor(nama, sisi){
    super(nama);
    this.sisi = sisi;
  }
  luas() {
    console.log('Luas ' + this.nama + ' ' + this.sisi * this.sisi)
  }
  keliling() {
    console.log('Keliling ' + this._nama + ' ' + 4 * this.sisi)
  }
}

var jariJari = 3;
let myLingkaran = new Lingkaran('Lingkaran', jariJari)
console.log(myLingkaran.nama);
myLingkaran.luas();
myLingkaran.keliling();

var sisi = 5;
myPersegi = new Persegi("Persegi", sisi);
console.log(myPersegi.nama);
myPersegi.luas();
myPersegi.keliling();