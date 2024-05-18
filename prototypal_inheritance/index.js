// All js objects have a __proto__ property with exception of objects created with Object.create(null),
// That is reference to another object, which is called the objects's prototype. When a property is accessed
// on an object and if the property is not found on object , the javascript engine looks at the object's __proto__,
// And the __proto__'s __proto__and so on ,until it finds the property defined on one of the __proto__s or until it reaches the end of the
// prototype chain.
// Parent object constructor.
function Animal(name) {
  this.name = name;
}
// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}
// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log("The " + this.constructor.name + " makes a sound.");
};
// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// create a new instance of Dog
const bolt = new Dog("Bolt");

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
