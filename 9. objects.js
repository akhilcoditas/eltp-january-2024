const badmintonPlayer = {
    name: "Arjun Kesharwani",
    country: "India",
    gender: "Male",
    lastFiveMatches: ["W", "W", "W", "W", "L"],
    racketDetails: {
        company: "Coditas",
        balance: "9000000000",
        isFlexible: false
    },
    smash: () => {
        console.log(`${this.name} smashes the shuttle`);
    },
    drop: function() {
        // this points to the badmintonPlayer object
        console.log(`the player from ${this.country} has a wonderful drop`);
    }
};

// access a property
badmintonPlayer.lastFiveMatches; // ["W", "W", "W", "W", "L"]
badmintonPlayer.lastFiveMatches[2]; // "W"
badmintonPlayer["country"]; // spain

const key = "gender";
badmintonPlayer[key]; // female
badmintonPlayer.key; // undefined

// modify a property
badmintonPlayer.lastFiveMatches = ["L", "L", "W", "W", "W"];
badmintonPlayer.lastFiveMatches.push("W");

// adding a property
badmintonPlayer.shoes = "abcd";
badmintonPlayer["sponsor"] = "Nike";

const newKey = "stringType";
badmintonPlayer[newKey] = "hybrid";

// calling methods
badmintonPlayer.smash; // reference of the function
badmintonPlayer.smash(); // invoking a function
badmintonPlayer.drop();


// Object class
// static method

// keys => return an array of keys (stringified) as elements
Object.keys(badmintonPlayer); // ["name", "country", "gender"....];

// hasOwnProperty => check whether the key exists or not
// returns a boolean

badmintonPlayer.hasOwnProperty("qwerty"); // false


// destructuring
const computer = {
    brand: "Lenovo",
    processor: "i5",
    ram: "16 GB"
}
// const brand = computer.brand;
// const processor = computer["processor"];
// const ram = computer.ram;

const { ram, brand, processor } = computer;
const { ram: ramName } = computer;
const { ram: power, ...processorAndBrand } = computer;

// cloning
const computerClone = computer;
// reference is copied in computer clone

// shallow clone
const compClone = { ...computer };