// Basic Object Destructuring
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const { name, age, city } = person;

console.log(name); // Alice
console.log(age); // 25
console.log(city); // New York

// Renaming Variables
const person2 = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Alice
console.log(personAge); // 25
console.log(personCity); // New York

//Default Values
const person3 = {
  name: "Alice",
  age: 25,
};

const { name3, age3, city3 = "Unknown" } = person;

console.log(name3); // Alice
console.log(age3); // 25
console.log(city3); // Unknown

//Nested Destructuring
const person4 = {
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  name4,
  address: { city4, zip4 },
} = person;

console.log(name4); // Alice
console.log(city4); // New York
console.log(zip4); // 10001
// Rest Operator
const person5 = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const { name5, ...rest } = person;

console.log(name5); // Alice
console.log(rest); // { age: 25, city: 'New York' }
