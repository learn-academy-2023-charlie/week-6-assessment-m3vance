// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("fortyTwo", () => {
  const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(fortyTwo(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// output: ReferenceError: fortyTwo is not defined 

// b) Create the function that makes the test pass.
  // pseudo: 
    // use .map to iterate array and create new string from each object
    // split value.name into array of words
    // use .map to uppercase word[0]
    // add the rest of the word with slice and join them back together
    // use string interpolation to return the expected sentence

const fortyTwo = (array) => {
  return array.map(character => {
    const name = character.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  return `${name} is ${character.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("what", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(what(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(what(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// output: ReferenceError: what is not defined

// b) Create the function that makes the test pass.
  // pseudo:
    // use .filter to create array of only numbers by using the typeof operator
    // use .map to divide the numbers in the array by 3

const what = (array) => {
  return array.filter(value => typeof value === "number").map(number => number % 3)
  }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeMe", () => {
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeMe(cubeAndSum1)).toEqual(99)
    expect(cubeMe(cubeAndSum2)).toEqual(1125)
  })
})

// output: ReferenceError: cubeMe is not defined

// b) Create the function that makes the test pass.
// pseudo:
  // declare the sum = 0
  // use for loop to iterate
  // use += operator to add the result of array[i] to the power of 3 to the sum
  // return sum which will be the accumulated value

const cubeMe = (array) => {
  let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += Math.pow(array[i], 3)
    }
 return sum
  }

// const cubeMe = (array) => {
//   return array.reduce((a, b) => a + Math.pow(b, 3), 0)
// }

// notes: the reduce method is cool, but I needed a lot of help from outside resources and I still can't quite grasp how it works, so I'm leaving it commented out.