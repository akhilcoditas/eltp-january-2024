console.log("Hello ELTP")
var number; //declaring a variable and number is undefined
console.log(number)
number = 15
console.log(number) //15
// AVOID using var

let primeNumber; //declaration
console.log(primeNumber)
primeNumber = 7; //assignment
console.log(primeNumber);
// always prefer let over var

const PI=3.9; //declaration + assignment
// only declaration is not allowed with const
console.log(PI)

// verbose variable name
// Use nouns
// use camelCasing