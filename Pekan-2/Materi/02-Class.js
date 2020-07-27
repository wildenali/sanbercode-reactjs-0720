console.log("---------------- Basic Class start ----------------");
class Car {
  constructor(brand, factory) {
    this.brand = brand
    this.factory = factory
    this.color = "black"
  }
}
console.log(Car);

var Motorcyle = class Motorcyle2 {
  constructor(brand, factory) {
    this.brand = brand
    this.factory = factory
  }
}
console.log(Motorcyle.name);
console.log("---------------- Basic Class end ----------------\n");


console.log("---------------- Method start ----------------");
class Water {
  constructor(brand) {
    this.watername = brand;
  }
  present() {
    return "I have a " + this.watername;
  }
}
myWater = new Water("Aqua");
console.log(myWater)
console.log(myWater.present())
console.log("---------------- Method end ----------------\n");

console.log("---------------- Static Method start ----------------");
class Tv {
  constructor(brand) {
    this.tvname = brand;
  }
  static hello() {
    return "Helow Tv";
  }
}
myTv = new Tv("Samsung");

// Memanggil hello() pada class Tv
// console.log(myTv.hello());  // hasilnya akan error, karena static
console.log("---------------- Static Method end ----------------\n");

console.log("---------------- Inheritance start ----------------");
class Bicycle {
  constructor(brand) {
    this.bicyclename = brand;
  }
  present() {
    return "I have a " + this.bicyclename;
  }
}
class Model extends Bicycle {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model + ' version';
  }
}
myBicycle = new Model("Brompton", "Lipat");
console.log(myBicycle.show());
console.log("---------------- Inheritance end ----------------\n");

console.log("---------------- Getters and Setters start ----------------");
class Laptop {
  constructor(brand) {
    this.laptopname = brand;
  }
  get cnam() {
    return this.laptopname;
  }
  set cnam(x) {
    this.laptopname = x;
  }
}
myLaptop = new Laptop('Asus');
console.log(myLaptop.cnam);
console.log("---------------- Getters and Setters end ----------------\n");

console.log("---------------- Property start ----------------");
class Truck {
  constructor(brand) {
    this._truckname = brand;
  }
  get truckname() {
    return this._truckname;
  }
  set truckname(x) {
    this._truckname = x;
  }
}
mytruck = new Truck("Ford");
mytruck.truckname = "Volvo"; // memanggil
console.log(mytruck.truckname);
console.log("---------------- Property end ----------------\n");