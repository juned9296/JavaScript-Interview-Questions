// Q- What is High Order Function in JavaDcript?

// Ans- A Function That Accepet other Function as
// argument is called a Higher-Order-Function which
// contains the Logic for when the CallBack function
// get exceuted.

//   ⦿ Example ⦿

function createQuote(quote, CallBack) {
  const myQuote = "Like I Always Say " + quote;
  CallBack(myQuote);
}

function logQuote(myQuote){
    console.log(myQuote);
}

createQuote("eat your Vegetable",logQuote);

//   ⦿ Explanation ⦿


// example fits the definition of a higher-order function 
// by accepting and working with functions as arguments.

// In this case, the createQuote function takes two arguments: 
// a quote string and a CallBack function. It then constructs a
//  new quote by appending a prefix to the provided quote and calls
//   the CallBack function, passing the new quote as an argument.

// The logQuote function is passed as the CallBack argument when you call
//  createQuote("eat your Vegetable", logQuote). This makes createQuote a 
//  higher-order function because it takes another function (logQuote) as 
//  an argument and uses it to perform an operation.
