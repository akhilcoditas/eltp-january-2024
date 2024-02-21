// traditional
// non parameterized, non returning function
function greet(/** parameter list */) {
    console.log('heeellooooo');
}

greet; // reference of the function
greet(); // invoking the function

function greetPerson(name) {
    console.log(`hi, ${name}`);
}

greetPerson("Akhil");

function getMessage(name) {
    const message = "Good Morning, ";

    return `${message}${name}`;

    // return stops the execution of the function
    console.log("message returned");
}

const message = getMessage("Rutuja");

// function expressions
// anonymous functions
const greeting = function () {
    console.log("hi");
}

greeting; // holds the reference to the anonymous function
greeting(); 

// fat arrow function
const add = (number1, number2) => {
        return number1 + number2;
}

add(5, 7); // 12

// when there is just 1 parameter
// no need to have the ()
// when the function has 1 line, no need for the scope {}
// and the return statement
const square = number => number ** 2;