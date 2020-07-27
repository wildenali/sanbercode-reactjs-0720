var superhero = ["Ironman", "Power Ranger", "Sinchan", "Kobutaku", "Power Puff Girl"];
var pahlawanObj = {
  firstName: "Tony",
  lastName: "Stark",
  gender: "Male",
  age: 16
}
console.log(superhero);
console.log(superhero[3]);
console.log(typeof superhero);

console.log(pahlawanObj);
console.log(pahlawanObj.lastName);
console.log(pahlawanObj["gender"]);
console.log(typeof pahlawanObj);

console.log('\n');


var mobil = [
  {merk: "BMW", warna: "merah", tipe: "sedan"},
  {merk: "toyota", warna: "hitam", tipe: "box"},
  {merk: "audi", warna: "biru", tipe: "sedan"}
]

// .forEach()
mobil.forEach(function(item) {
  console.log("Warna " + item.warna);
})

// .map()
var arrayWarna = mobil.map(function(item){
  return item.warna;
})
console.log(arrayWarna);

// .filter()
var arrayMobilFilter = mobil.filter(function(item) {
  return item.tipe != "sedan";
})
console.log(arrayMobilFilter);