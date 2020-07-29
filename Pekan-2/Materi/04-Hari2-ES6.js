/*  Daftar Fitur ES6
Arrows Function, Classes, Enchanced object literals, Template strings, Destructuring,
Default + rest + spread, Let + const, Iterators + for..of, Generators, Unicode,
Modules, Modules loaders, Map +set + weakmap + weakset, Proxies, Symbols,
Subclassable built-ins, Promises, Math + number + string + array + object apis,
Binary dan octal literals, Reflect API, Tail calls
*/

/*
- let + const
- arrow function
- default paramater
- template literal
- class
*/

// ES6
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);

// Function Normal
function iniFungsi() {
  console.log("ini fungsi");
}
iniFungsi();

// Function ES6
var ituFungsi = () => (
  console.log("itu juga fungsi")
)
ituFungsi();

// Default Parameters ES6
function perkalian(a, b = 4) {
  return a * b;
}
console.log(perkalian(5));

// Template Literals, ES6
const firstName = "Wilden"
const lastName = "Ali"
const teamName = "Tim hijau lumut"

const theString = `${firstName} ${lastName}, ${teamName}`
console.log(theString);

// Class
class mobil{
  constructor(merek) {
    this.name = merek;
  }
}
mobilKu = new mobil('Toyota');
console.log(mobilKu);