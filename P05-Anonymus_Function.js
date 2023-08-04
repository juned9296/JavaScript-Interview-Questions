// Q- What is Anonymus Function ?

// Ans- An anonymous function is a function in JavaScript
// that is defined without a name and can be assigned to variables,
// used as arguments for other functions, or executed immediately
// after creation.

//   ⦿ Example ⦿

const add = function (x, y) {
  return x + y;
};

const result = add(3, 5);
console.log(result);


// ⦿ Another  Example ⦿

setTimeout(function () {
  console.log("This message will be displayed after a delay.");
}, 2000); // Display after 2000 milliseconds (2 seconds)
