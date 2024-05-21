// concise syntax and functionality
// Event Handlers
document.getElementById("container").addEventListener("click", function () {
  console.log("Button Clicker");
});

// Callbacks
// They are frequently used as a callback function in asynchronus function such as setTimeout and setInterval, or when
// Working with promises
setTimeout(() => {
  console.log("Time Out reached");
}, 1000);

fetch("/api/data")
  .then((resp) => resp.json())
  .then((data) => console.log(data));

// Array Methods
// Methods like "map","filter","reduce" often use anonymous function to define the behaviour applied to each element in array
const numbers = [1, 2, 3, 4];
const squares = numbers.map((x) => x * 2);
console.log(squares);

// IIFE => Immediately after they are defined
(function () {
  console.log("Hello world");
})();
