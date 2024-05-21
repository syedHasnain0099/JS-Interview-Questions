// The only difference between call and apply method is a way that we passed as argument
// In call method we passed arguments comma seperated but in apply method we pass argument as array in second argument

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

// using "call()" method

printName.call(name1, "UP", "Mumbai"); // Sachin Tendulkar UP Mumbai

// using "apply()" method

printName.apply(name2, ["UP", "Mumbai"]); // Akshay kumar UP Mumbai
