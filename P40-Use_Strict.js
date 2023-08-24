/*
 Q. What is useStrict in JavaScript ?

 Ans.use strict" in JavaScript is like a safety mode you can turn on
     at the start of your code. It helps prevent common coding mistakes
     and enforces stricter rules, making your code less likely to have 
     hidden bugs or unexpected behavior. */

"use strict";

// This code is in strict mode

function myFunction() {
  x = 10; // This would cause an error in strict mode because 'x' is not declared
}

myFunction();
