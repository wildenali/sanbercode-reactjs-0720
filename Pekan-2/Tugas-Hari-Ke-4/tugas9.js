// -------------------- Soal 1 Start --------------------
const newFunction = function literal(firstName, lastName) {
  return {
    fullName: function() {
      return console.log(firstName + " " + lastName)
    }
  }
}

// Driver Code
newFunction("William", "Imoh").fullName()
// -------------------- Soal 1 end --------------------

// -------------------- Soal 2 start --------------------
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation, spell)
// -------------------- Soal 2 end --------------------

// -------------------- Soal 3 start --------------------
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)
// -------------------- Soal 3 end --------------------