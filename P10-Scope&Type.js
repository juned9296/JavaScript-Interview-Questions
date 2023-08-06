/* Q- What is Scope and type of Scope ?

Ans- Scope Determine The Accessibility (Visibility) of the
Varriables.

There are two main types of scope in JavaScript 

▶︎ Global Scope:

 Variables declared in the global scope are accessible
 throughout the entire program, including within functions and blocks. */

var Global = 10;

function useglobal() {
  console.log(Global + " I am Global Varriable  ");
}

useglobal();

/* ▶︎ Local Scope (Function Scope and Block Scope):

Variables declared within a function or block have local scope.
They are only accessible within that specific function or block. */


function myFunction() {
  var localVar = 20; // Function-scoped variable
  if (true) {
    let blockVar = 30; // Block-scoped variable
    console.log(blockVar); // Accessible here
  }
  console.log(localVar); // Accessible here
}

myFunction();
