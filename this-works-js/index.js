// this is determined at the time a function is invoked by inspecting where it’s called
// if new keyword is used when calling the function this inside the function is a brand new object
// Line no 2 will print empty object and line 4 will print { value:10 }
function ConstructorExample() {
  console.log(this);
  this.value = 10;
  console.log(this);
}

// same as below using class declaration

class ConstrunctorExample {
  constructor() {
    console.log(this);
    this.value = 10;
    console.log(this);
  }
}

new ConstructorExample();

// if bind,call,apply is used to call function this inside the function is the object that passed as argument
function fn() {
  console.log(this);
}

var obj = {
  value: 5,
};

var boundfn = fn.bind(obj);
boundfn(); // { value: 5}
fn.call(obj); // { value: 5}
fn.apply(obj); // { value: 5}

// if a function is called as a method - that is if dot notation is used to invoke the function
// this is the object that the function is a propery of.
// In other words, when a dot is to the left of a function invocaion, this is the object to the
// left side of the dot
var obj = {
  value: 5,
  printThis: function () {
    console.log(this);
  },
};

obj.printThis(); // -> { value: 5, printThis: ƒ }

//f a function is invoked as a free function invocation
// meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it’s window.

function fn() {
  console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}

// Practice of this keyword in two different function calls

var obj = {
  value: "abc",
  printThis: function () {
    console.log(this);
  },
};

var print = obj.printThis;
obj.printThis(); // -> {value: "hi", printThis: ƒ}
print(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}

// When multiple rules apply, the rule higher on the list wins.

var obj1 = {
  value: "hi",
  print: function () {
    console.log(this);
  },
};
var obj2 = { value: 17 };

obj1.print.call(obj2); // -> { value: 17 }
new obj1.print(); // -> {}
