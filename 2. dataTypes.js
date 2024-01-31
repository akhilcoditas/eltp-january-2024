// Number
const integer = 5;
const decimal = 7.8;
const randomNumber = 87654321;
const negative = -8;

// String
// is enclosed "", '', ``
const singleQuoted = 'Arjun';
const doubleQuoted = "Prahlad";
const backTicked = `Tanuja`;

// Boolean
const isWeekend = false;
const isWeekDay = true;

// undefined
const ground = undefined //NEVER EVER DO THIS

// null
const aarti = null; //NEVER DO THIS

// collection data types
//  array -> element of ANY type seperated by commas enclosed in []

const numbers = [1, 2, 4, 5, 6];

const person = [
    20,
    "Siddhant",
    "Mayur",
    false,
    undefined,
    null,
    { name : "Abhijeet" },
    ["Kesharwani"],
    function() { console.log("blah blah")}
];

// objects
// key: value pairs, seperated by commas
// enclosed in {}

const personObject = {
    age: 20,
    name: "Nana",
    isMarried: false,
    qualification: ["10", 12],
    address: {
        lane: "4",
        flat: "808/E"
    },
    greet: function() {
        console.log("Balle Balle")
    }
}

// function
function greet() {
    console.log("Hello");
}

console.log(typeof greet); //function