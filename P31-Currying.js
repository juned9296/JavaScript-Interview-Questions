/*
Q. What is Currying in JavaScript ?
Ans- Currying is the Process that allows you to transform a function with multiple
     arguments  into a sequence of nesting function.
     
   🔘  Example */

// Non-curried function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using the curried function
const curriedAdd = curryAdd(1);
const intermediateResult = curriedAdd(2); // Returns a function waiting for the last argument
const finalResult = intermediateResult(3); // Returns 6
