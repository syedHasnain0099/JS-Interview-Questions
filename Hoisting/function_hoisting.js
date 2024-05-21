// function declaration
console.log(foo); // [Function : foo]
foo(); // "FOOOOOO"
function foo() {
  console.log("FOOOOOO");
}

console.log(foo); // [Function: foo]

// function expression
console.log(bar); // undefined
bar(); // uncaught typeerror: bar is not a function

var bar = function () {
  console.log("BARRRRR");
};
console.log(bar); //[function:bar]
