// compare 2 things and evaluate a boolean

5 < 5; // false
5 <= 5; //true
5 < "a"; //false
"a" < 5; //false
5 < "7" // true
5 == "5" //true -> datatypes not compared
5 === "5" // false -> datatypes are compared
9 != "9" // false
9 !== "9" //true 
//  === comparison both datatypes and values

8 == 8 //true
8 === 8 //true
8 < "asdfhjkl"; //false
"a" == "a" //true
8 == [] // false
// 8 === [] //false
// [] == [] //false
// [] === [] // false
// {} == {} //false
// {} === {} // false

const a = NaN;
const b = NaN;

a==b // assignment
a===b // assignment

//  How to compare arrays // explore this
console.log(!!"true" == !!"false")