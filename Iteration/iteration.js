// Iterating over Array Items:
const array = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); //1,2,3,4,5
}
// for ... of
for (const item of array) {
  console.log(item); //1,2,3,4,5
}
// forEach
array.forEach((item) => {
  console.log(item); //1,2,3,4,5
});

// map
const doubled = array.map((item) => item * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
const even = array.filter((item) => item % 2 === 0);
console.log(even); // [2, 4]

// reduce
const sum = array.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum); // 15

// Iterating over Objects:
const obj = { a: 1, b: 2, c: 3 };

// for ... in
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
// Output
// a: 1;
// b: 2;
// c: 3;
// "Object.keys()"
Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});

//"Object.values"
Object.values(obj).forEach((value) => {
  console.log(value);
});

//"Object.entries"
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
