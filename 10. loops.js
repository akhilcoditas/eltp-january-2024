// for
// traditional
for(let counter = 0; counter < 10; counter++) {
    console.log('doing something repetitively');
}

const people = [
    { name: "Tanuja" }, 
    { name: "Yashraj" }, 
    { name: "Sanket" }, 
    { name: "Raviteja" }
];



const name = "Pranjal";

for(let index = 0; index < people.length; index++) {
    const person = people[index];
    console.log(person.name);
}
const person = {
    name: "Siddhant",
    rating: 2900
}


const keys = Object.keys(person);
// ["name", "rating"];
for(let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = person[key];

    console.log(value);
}

for(let index = 0; index < name.length; index++) {
    const char = name[index];

    console.log(char);
}

// for .. in loop
// index or key
for(let index in people) {
    const person = people[index];

    console.log(person.name);
}

for(let key in person) {
    const value = person[key];

    console.log(value);
}

for(let index in name) {
    const char = name[index];

    console.log(char);
}

// for of loop
// not going to iterate over object
for(let { name } of people) {
    // { name: "..." }
    // const { name } = person;
    console.log(name);
}

for(let char of name) {
    console.log(char);
}

// while
let counter = 0;
while(counter < 10) {
    counter++;

    console.log(counter);
}

