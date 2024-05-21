// Currying is a technique in functional programming where a function that takes multiple arguments
// is transformed into a sequence of functions that each take single argument. Currying allows you to create more
// flexible and reusable functions.

// Example of a curried function
function add(a) {
  return function (b) {
    return a + b;
  };
}
const addFive = add(5);
console.log(addFive(3)); // Output: 8
console.log(addFive(10)); // Output: 15
// Advantages of currying
// --> Partial Application
// --> Function Reusability
// --> Function Composition
// --> Improved Readability and Maintainability

// Practical Example: Curried Function For Logging
function log(level) {
  return function (message) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  };
}
const info = log("info");
const warn = log("warn");
const error = log("error");
info("This is an informational message."); // Output: [INFO] This is an informational message.
warn("This is a warning message."); // Output: [WARN] This is a warning message.
error("This is an error message."); // Output: [ERROR] This is an error message.

// Currying with ES6 Arrow Functions
const add = (a) => (b) => a + b;

const addSix = add(6);
console.log(addSix(3)); // Output: 8
console.log(addSix(10)); // Output: 15
// Summary
// Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument.
// This technique enhances partial application, function reusability, and composition, leading to cleaner and more maintainable code.
