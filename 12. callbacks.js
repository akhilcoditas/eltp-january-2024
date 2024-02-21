// function references passed as paramaters are called callback functions

const greetAdmin = _ => 'Heleoooooo, Admin';

const greetEmployee = _ => `Hi, Employee`;

const greet = (greetingFn) => {
    // greetingFn ==> a reference to a function
    const message = greetingFn();
    console.log(message);
}

// when admin logs in
greet(greetAdmin);

// when employee logs in
greet(greetEmployee);

// [1, 2, 3, 4, 5];
const map = (array, modifierFn) => {
    // ["Sarang", "Arjun", "Gaurav", "Amit"]
    // n => n.toUpperCase()
    const modifiedArray = [];

    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        // Amit

        const modifiedElement = modifierFn(element);
        // AMIT

        modifiedArray.push(modifiedElement);
        // ["SARANG", "ARJUN", "GAURAV", "AMIT"]
    }

    return modifiedArray;
}

map(["Mayur", "Gaurav", "Yash", "Rutuja"], n => n.toUpperCase());
map([10, 20, 30, 40], number => number/10);
map([{name: "a"}, {name: "b"}], user => user.name);

// assignment => create a generic filter method