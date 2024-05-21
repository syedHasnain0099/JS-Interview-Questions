// Basic Array Destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

//Skipping Elements
const numbers2 = [1, 2, 3, 4, 5];

const [first2, , third2, , fifth2] = numbers;

console.log(first); // 1
console.log(third); // 3
console.log(fifth2); // 5

//Default Values
const numbers3 = [1, 2];

const [first3, second3, third3 = 3] = numbers;

console.log(first3); // 1
console.log(second3); // 2
console.log(third3); // 3

//Rest Operator
const numbers4 = [1, 2, 3, 4, 5];

const [first4, second4, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
