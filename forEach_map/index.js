// For Each
// Iterates through each element in array
// Executes a callback function for each element
// Does not return a value

const a = [1, 2, 3];
const double = a.forEach((number, index) => {
  // Do something with number and index
});
// double= undefined

// Map
// Iterates thorugh each element in array
// "Maps" each element to a new element by calling the function on each element, creating a new array as result

const array = [1, 2, 3];
const triple = a.map((num, index) => {
  return num * 3;
});
// triple=[3,6,9]
