// var - declared variables are hoisted, meaning you can refer to the variable anywhere in its scope
// even if its declaration is not reached yet. You can see var declarations as being "lifted" to the top of its
// function or global scope

console.log(x === undefined); // true
var x = 3;
(function () {
  console.log(x); // undefined
  var x = "local value";
})();
// Above example will be interpreted the same as:
var x;
console.log(x === undefined);
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();

// whether let and const are hoisted is a matter of definition debate. Referencing the variable in the block before
// the variable declaration always results in a reference error

console.log(y); // reference error
const x = 3;

console.log(z); // reference error
let z = 3;
