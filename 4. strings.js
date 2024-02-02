const name = 'Akhil'; // "name", `name`
const greet = "Heyyyy";

console.log(`${greet}`); //Heyyy

// 1st way  (es5 way)
// uses the + operator
let greeting = greet + ', ' + name; //Heyy, Akhil 

// 2nd way
// uses `` string and ${}

greeting = `${greet}, ${name}`;
//Always use es6 way over es5

// indexing
// string are indexed based

// POSITION      12345
const message = "Hello";
// INDEX         01234

message[2] //l

message.charAt(2) //l

message[0] = "B"; 
console.log(message) //Hello is not going to change
// STRING ARE IMMUTABLE

// properties
// length
message.length //5

//Methods
// split -> implement on your laptops
// toUpperCase()
//  toLowerCase()

const language = "JavaScript Training";
language.substr(4,6) //Script
language.substring(4,6) //Sc
language.trim() // 
language.includes('S') //true
language.indexOf()
language.lastIndexOf()



