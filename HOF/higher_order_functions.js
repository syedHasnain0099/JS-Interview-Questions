// Higher Order Function
// A higher order function is function that does at least one of the following
// -->Takes one or more functions as arguments
// -->Returns a function as its result

// Provides
//--> abstraction
//--> reusable piece of code
//--> Composition

// Examples:
// 1. Functions that take other functions as arguments:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 2. Functions that return other functions:
function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Common Higher-Order Functions in JavaScript
// map, filter, reduce, forEach, sort
