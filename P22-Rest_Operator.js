/*
Q. What is Rest Operator in JavaScript ?

Ans- The Rest operator is used to put the rest of some user supplied 
     value into JavaScript Array. its denoted by ...Dot. its commonly 
     used in function.

     ⦿ Example 1   */

function myFunction(...args) {
  console.log(args);
}

myFunction(1, 2, 3, 4, 5);

//  ⦿ Example 2

function myFunction(firstArg, secondArg, ...remainingArgs) {
  console.log(firstArg);
  console.log(secondArg);
  console.log(remainingArgs);
}

myFunction(1, 2, 3, 4, 5);
