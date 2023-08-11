/*
Q. What is Spread Operator in JavaScript ?

Ans-The spread operator, represented by three dots (...), is used to expand elements from one array 
    or object into another. It's often used to make copies, combine arrays, or pass multiple elements 
    to functions.

For example: */

// 1-Copying an array:

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(originalArray);

// 2-Combining arrays:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// 3-Passing multiple arguments to a function:

const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
const result = sum(...numbers);
console.log(result);

// 4-Creating a new object with properties from an existing object:

const person = { name: "Juned", age: 23 };
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson);
