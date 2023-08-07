// Q- What is the setInterval in JavaScript ?

// Ans- setInterval is the built-in-function that sechdules the execution
// of a given function at regular intervals.it takes two parameters the function
// you want to excute and the time interval in millisecond between each execution.

// This function will continue to run at the specified interval until you manually 
// stop it using the clearInterval function. It's commonly used for tasks like updating
// real-time data, creating animations, and periodically checking for changes on a webpage.

// Here's an example

 function showMessage(){
    console.log("Hello G This msg will repeate in every 4 Second.");
 }

 var intervalID = setInterval(showMessage,4000);

 setTimeout(function(){
    clearInterval(intervalID);
    console.log("Interval Has been Cleared.")
 },16000);

