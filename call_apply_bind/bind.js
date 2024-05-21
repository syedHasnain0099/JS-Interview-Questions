// The bind() method of Function instances creates a new function that, when called, calls this
// function with its this keyword set to the provided value,
// and a given sequence of arguments preceding any provided when the new function is called.
let name1 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

let name2 = {
  firstName: "Akshay",
  lastName: "kumar",
};

function printName(city, state) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
}

// using "bind()" method

var firstPerson = printName.bind(name1, "UP", "Mumbai");
firstPerson(); // Sachin Tendulkar UP Mumbai
