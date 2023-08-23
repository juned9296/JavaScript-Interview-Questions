/*

Q- What is Execution Context ?
Ans- Execution Context in JavaScript refers to the envirement
     in which a piece of code of javascript code is executed.
     it includes all the varriable, functions and scope chains
     that are accessible during the execution code.

     There are three main types of execution contexts in JavaScript:

     1- Global Execution Context
     2- Function Execution Context
     3- Eval Execution Context

     */
     var globalVar = "I am global"; // This variable is in the global execution context

     function outerFunction() {
       var outerVar = "I am outer"; // This variable is in the outer function's execution context
       
       function innerFunction() {
         var innerVar = "I am inner"; // This variable is in the inner function's execution context
         console.log(globalVar);     // Accessible because it's in the global scope
         console.log(outerVar);      // Accessible because it's in the outer scope
       }
       
       innerFunction();
     }
     
     outerFunction();
     