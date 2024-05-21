key Differences

DataTypes:
--> Primitive Data types(numbers,strings,etc.) are immutable, while objects(arrays,objects) are mutable.

Assignment vs. Modification:
--> Assigning a new value to an immutable variable involves creating a new object or value. Modifying a mutable objects changes its internal state without creating a new object.

Behavioral Considerations:
--> Immutable data helps in maintaining predictability and avoiding unintended side effects in functions and across different parts of the program. Mutable objects require careful handling to manage state changes and prevent unexpected modifications.

Immutable Objects:
--> Prmitive data types such as numbers, strings, booleans,"null" and "undefined" are immutable
--> This means that once these values are created, their state cannot be changed. Any operation that seems to modify them actually creates a new value

Example:
let str="Hello";
str= str+ "world"; // Creating a new string, "Hello World"

Mutable Objects:
--> Objects like arrays and objects(including instance of user-defined classes) in JavaScript are mutable
--> Mutable objects can have their properties modified directly without creating new objects

Example:
let arr=[1,2,3,4]
arr.push(5) // Modifies the array directly
