// INDEX         0   1   2   3   4   5
const numbers = [10, 20, 30, 40, 50, 60];

// access elements
numbers[2]; //30
numbers[5] = 70; //changes the elemnt at index 5

// property
// length
numbers.length; //6

// methods
// push -> add elements
// return new length of an array
numbers.push(70); // 7 -> [10,20,30,40,50,60,70]

// unshift -> add element at start
// return snew length of an array
numbers.unshift(0) //

// shift
// splice
// returns an array of elements that are deleted 
numbers.splice(2,0,15) //[]

//pop
//  delete the last element
numbers.pop() //70

numbers.indexOf(10,1) 
numbers.lastIndexOf(10);

numbers.toString() //
// [10,20] === [10,20]
numbers.reverse() //it reverse an array