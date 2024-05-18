// undeclared variables are created when you assign a value to an identifier that is not previously
// created using var let const. Undeclared valriables will be defined globally ,outside of the current scope
// In strict mode, a reference error will be thrown when you try to assign to a undeclared variable. Undeclared variables
// are bad just like how global variables are bad. Avoid them at all cost

function foo() {
  x = 1; // throws a reference error in strict mode
}

foo();
console.log(x); // 1

// A variable that is undefined is a variable that has been declared, but not assigned a value. It is of type undefined. If a function
// does not return any value as the result of executing it is assigned to a variable, the variable also has the value of undefined
// To check for it compare using strict equality === operator or type of which will give the undefined string

var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === "undefined"); // true

console.log(foo == null); // true. Wrong, dont use this to check!

function bar() {}
var baz = bar();
console.log(baz);

// A variable that is null will have been explicitly assigned to the null value. It represents no value and is different from undefined in the sense
// that it has been explicitly assigned . To check for null, simply compare using the strict equality operator.

var foo = null;
console.log(foo === null); // true
console.log(typeof foo === "object");

console.log(foo == undefined); // true. Wrong, dont use this to check!
