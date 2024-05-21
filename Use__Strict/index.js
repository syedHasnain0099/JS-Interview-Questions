// "use strict" is a statement used to enable strict mode to entire scripts or individual functions.
// Strict mode is a way to opt into a restricted variant of JavaScript.

// Advantages:
// Makes it impossible to accidently create global variables
// Make assignments which would otherwise silently fail to throw an exceoption
// Requires that function parameters names be unique
// this is undefined in global context
// It catches some common coding bloopers, throwing exceptions
// It disables features that are confusing or poorly thought out

// Disadvantages:
// Many missing features that some developers might be used to.
// No more access to function.caller and function.arguments.
// Concatenation of scripts written in different strict modes might cause issues.

// Examples:
// Eliminates Silent Errors: Converts silent errors into throw errors. For example, assigning a value to an undeclared
// variable thorws an error insted of creating global variable
"use strict";
x = 10; // ReferenceError: X is not defined

// Prevents Accidental Globals: Helps avoid accidental creation of global variables.
("use strict");
function foo() {
  y = 20; // ReferenceError: y is not defined
}
foo();

// Disallows Duplicates: Prevents the use of duplicate parameter names in function, which can cause confusion
("use strict");
function sum(a, a) {
  return a + a;
}

// Enhanced Security:
("use strict");
delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
// Disadvantages of Using Strict Mode
// Compatibility Issues
// Less Flexibility
// Verbose for Legacy Code
