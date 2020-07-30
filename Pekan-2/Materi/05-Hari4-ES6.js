// Enhanced object literals
// Destructuring
// Rest Parameters + Spread Operator
// Promises


console.log('----- Enhanced object literals -----')
// ES5
const fullName = 'John Doe'
const john = {
  fullName: fullName
}
console.log(john)

// ES6
const pullName = 'John DOe'
const jon = {pullName}
console.log(jon)
console.log('----- Enhanced object literals -----\n')

console.log('----- Destructuring -----')
/*
Destructuring merupakan ekspresi javascript yang memungkinkan untuk membagi atau
memecah nilai dari sebuah array atau objek ke dalam variabel yang berbeda
*/
// tanpa destructuring
var number = [1,2,3]
var numberOne = number[0]
var numberTwo = number[1]
var numberThree = number[2]
console.log(numberOne)
console.log(numberTwo)
console.log(numberThree)

// object
var studentName = {
  firstName: 'Peter',
  lastName: 'Parker'
};
const firstName = studentName.firstName
const lastName = studentName.lastName
console.log(firstName)
console.log(lastName)


// dengan destructuring
let nomer = [1,2,3]
const [nomorSatu, nomorDua, nomorTiga] = nomer
console.log(nomorSatu)
console.log(nomorDua)
console.log(nomorTiga)

// object
var namaStudent = {
  pirstName: 'Wilden',
  rastName: 'Ali'
}
const {pirstName, rastName} = namaStudent
console.log(pirstName)
console.log(rastName)
console.log('----- Destructuring -----\n')

console.log('----- Rest Parameters + Spread Operator -----')
// Rest Parameters
// contoh 1
let scores = ['98', '95', '93', '90', '87', '85']
let [...restOfScores] = scores
console.log(restOfScores)

let [first, second, third, ...ygAkhir] = scores
console.log(first)
console.log(second)
console.log(third)
console.log(ygAkhir)


console.log('----- Rest Parameters + Spread Operator -----\n')