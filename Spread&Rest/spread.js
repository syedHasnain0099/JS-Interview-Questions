// Spread Syntax

// Expand Arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5]

// Concatenate Arrays:
const arr3 = [1, 2, 3];
const arr4 = [4, 5];
const concatenated = [...arr3, ...arr4];

console.log(concatenated); // [1, 2, 3, 4, 5]

//Copy Arrays:
const arr = [1, 2, 3];
const copy = [...arr];

console.log(copy); // [1, 2, 3]

//Convert Strings to Arrays:
const str = "hello";
const chars = [...str];

console.log(chars); // ['h', 'e', 'l', 'l', 'o']

//Pass Elements as Arguments to Functions:
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
