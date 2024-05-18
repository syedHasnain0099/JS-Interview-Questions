// ES6 introduce arrow functions but in arrow functions this referes to lexical scopping compared to regular functions
// lexical scopping means the ability for a function scope to access values from parent scope

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

var timer = new Timer();

// The keypoint is that the arrow function inside setInterval capture this value from the Timer
// lexical scope therefore this.seconds inside the arrow function correctly refers to the seconds property of the timer
// instance

function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
var timer = new Timer();

// Inside the regular function this does not refer to the Timer instance instead it refers to global object
// or undefined inside unstrict mode To fix this you would typically need to bind this

function Timer() {
  this.seconds = 0;
  setInterval(
    function () {
      this.seconds++;
      console.log(this.seconds);
    }.bind(this),
    1000
  );
}
var timer = new Timer();

//Call and Apply: Arrow functions cannot be used with call and apply to dyamically change their "this" context because
// their 'this' value is lexically bound

var obj = {
  value: 5,
};

var arrowFunction = () => {
  console.log(this.value);
};

arrowFunction.call(obj); // still 'this' refers to the lexical scope not 'obj'

// conclusion

// Arrow functions provide a simpler way to handle 'this' in many situations by capturing the 'this'
// value from the enclose lexical scope. However this behaviour can introduce issues when the dynamic context is needed
// such as when using '.call()','.apply()'
