// Extending built-in javascript objects such as Array, Object, String is generally considered a bad practice for several reasons:

// Potential for Name Collisions

// if you add methods or properties to built-in objects, you risk conflicting with future versions of javascript that might introduce
// or properties with the same names. This can cause your code to break or behave unpredictabl.

// Unexpected Behavior
// Modifying built-in prototypes can lead to unexcpected behaviorin your own code or third-party libraries that rely on the original
// behavior of these objects. This can make debugging difficult and increase the likelihood of bugs.

// Performance Implications
// Extending built in objects can lead to performance issues. JavaScript engines are highly optimized for the default behavior of built-in objects
// modifying them can disrupt these optimizations and degrade performance

// Maintainability
// Code that extends built-in ibjects can be harder to maintain, especaiily for other developets who might not expects such modifications.
// It can also make your codebase less readable and hareder to understand

// Compatibility Issues
// Libraries and frameworkds often assume that built-in objects behave in a standard way. Extending these objects can lead to comatibility issues with
// these external dependies

// Exmaple to illustrate some of these points:
// Extending Array prototype

Array.prototype.customMethod = function () {
  console.log("This is custom method");
};
// using a third library the iterates over arrays

function useLibraryFunction(arr) {
  for (var i in arr) {
    console.log(arr[i]); // Unexpectedly logs "function" if customMethod is included
  }
}

var myArray = [1, 2, 3];
useLibraryFunction(myArray);
// Expected Output: 1, 2, 3
// Actual Output: 1, 2, 3, function customMethod() { console.log("This is a custom method"); }

// Safe Alternative
// Utility Function
function customeMethod2(arr) {
  console.log("This is a custom Method of array");
}
// Custom Wrapper Classes:
class CustomArray extends Array {
  customMethod() {
    console.log("This is a custom method for CustomArray");
  }
}
let arr = new CustomArray(1, 2, 3);
arr.customMethod(); // Works without affecting standard arrays
