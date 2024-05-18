// IIFE stands for Immediately invoked function expression

// An IIFE is an anonymous function that is created and then immediatley invoked.Its not called
// from anywhere else(hence why it's anonymous), but runs just after being created.
//Common syntax
(function () {
  return 5;
})(); // returns 5 right away

// Named Function
// Even though namin the function is not necessary,it can be useful for debugging

(function foo() {
  return "foo";
})();

// Arrow Function (ES6)
// With ES6, you can use arrow functions in IIFE as well

(() => {
  return 4;
})();

// Explanation of the Syntax Error
// function foo(){}();
// In above example the javascript parser reads it as a function declaration followed by '()'
// which leads to an error because "()" is interpreted as an attempt to invoke a non existent function

//Wrapping in Parentheses
(function foo() {})();

//Using the void Operator
// void function foo() {}();

// The 'void' operator ensures the function is treated as an epxression, but it also forces the result to be "undefined"
// Here's a practical example of using an IIFE to create a local scope and avoid polluting the global namespace:
(function () {
  var localVariable = "I am local";
  console.log(localVariable); // I am local
})();
console.log(typeof localVariable); // undefined
