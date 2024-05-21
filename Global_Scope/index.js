// Avoiding Namespace Pollution
// example of namespace pollution
var myVar = 42; // This could potentially overwrite another variable with the same name

// Preventing Global Conflicts
window.$ = "Global Variable"; // This could conflict with jQuery or other libraries

// Best Practices to Avoid Global Scope Modifications:

// use "let" and "const":

let localVariable = "I am local";
const PI = 3.14159;

// Encapsulation with IIFE:
(function () {
  var privateVar = "I am private";
  console.log(privateVar);
})();
