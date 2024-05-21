// The rest syntax is used in function parameters to collect all remaining arguments into an array. It allows you to:

// Collect Remaining Arguments:
function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

// Handle Variable-Length Argument Lists:

function printNames(first, last, ...middle) {
  console.log(`First Name: ${first}`);
  console.log(`Last Name: ${last}`);
  console.log(`Middle Names: ${middle.join(", ")}`);
}

printNames("John", "Doe", "William", "Smith", "Michael");
// Output:
// First Name: John
// Last Name: Doe
// Middle Names: William, Smith, Michael
