// lets first look at example of each:
// ES5 function constructor
function Person(name) {
  this.name = name;
}
//ES6 class
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

// Main difference comes when using inheritance
// create Student class that subclasses Person and add a studentId Field, this is what
// we have to do in addition to the above
// ES5 function constructor
function Student(name, studentId) {
  // call constructor of superclass to initalize superclass-derived members
  Person.call(this, name);
  // Initialize subclass's own members.
  this.studentId = studentId;
}
class Student extends Person2 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
// It's much more verbose to use inheritance in ES5 and the ES6 version is easier to understand and remember.
