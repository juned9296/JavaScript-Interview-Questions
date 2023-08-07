// What is the Closure in JavaScript ?

// Ans- Closure are an ability of a function to remember the
// varriables that are decleared in its Outer Scope.

function outer() {
  let a = 20;
  let b = 10;

  let inner = function () {
    console.log("inner", a, b);
  };
  return inner;
}

let result = outer();
result();





// example 2

function outerFunction() {
  var outerVariable = "I am from the outer function's scope";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closureFunction = outerFunction(); // innerFunction is returned

closureFunction(); // Outputs: "I am from the outer function's scope"
