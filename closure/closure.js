//A closure is the combination of a function bundled together (enclosed) with references to
//its surrounding state(the lexical enviorment). In other words a closure give you access to
//outer function scope from an inner function.

//Lexical Scoping

function init() {
  var name = "Mozilla"; // name is local Variable created by iniy
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); //Use variable declared in the parent function
  }
  displayName();
}
init();
// init() creates a local variable called name and function called displayName(). the displayName()
// function is an inner function that is defined inside init and is available only within the bode of init()
// function . Note that the displayName() function has no localVariables of its own. However, since inner functions
// have access to the variable of outer functions, displayName() can access the variable name declared in the parent function, init()

// Closure

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
// In above Example whats different is that the displayName() inner function is returned from the outer function before being executed
// Once makeFunc() finished executing you might expect that the name variable would no longer be accessible. However the code still works as epxected, this is
// not the case in js. The reason is that function in js form closures. A closure is the combination of a function and the lexical enviorment within which that function was declared
// The enviorment consists of any local variables that were-in scope at the time the closure was created.

// Interesting Example

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
// In above example, We have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and return the
// sum of x and y. makeAdder is a function factory.It create function that can add a specific value to their argument. add5 and add10 both form closures. They share the same function body definition,
// but store different lexical enviorments. In add5 lexical enviorment , x is 5 , while in the lexical enviorment for add10 , x is 10
