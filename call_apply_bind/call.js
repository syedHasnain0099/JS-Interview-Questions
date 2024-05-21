// call() is used for borrwing function

let name1 = {
  firstName: "Akshay",
  lastName: "Kumar",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name1.printName(); // Aksay Kumar

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

name1.printName.call(name2); // Sachin Tendulkar

// OR
function printName() {
  console.log(this.firstName + " " + this.lastName);
}
let name3 = {
  firstName: "Akshay",
  lastName: "Kumar",
};
printName.call(name3); // Aksay Kumar
let name4 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};
printName.call(name4); // Sachin Tendulkar
