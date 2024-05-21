// == is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary type conversions.
// The === operator will not do type conversion, so if two values are not the same type === will simply return false. when using ==, funky things can happen such as:

1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true

var a = null;
console.log(a == null); //true
console.log(a == undefined); // true
