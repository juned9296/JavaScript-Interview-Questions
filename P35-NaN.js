/*
Q. What is NaN in Js ?

Ans. NaN Stand For Not a Number . it is a property of global object 
     that means it always persent in the global scope. */


// Trying to perform a calculation with non-numeric values
let result = "hello" / 5;
console.log(result); 



// Attempting to perform an undefined operation
let x;
let y = 10;
let sum = x + y;
console.log(sum); 

// Using a function that results in NaN
let z = parseInt("abc");
console.log(z); 
