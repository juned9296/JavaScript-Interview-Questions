/*
Q. What is Window Object in JavaScript ?

Ans. In JavaScript, the window object is a global object provided by
     the browser environment when running JavaScript code in a web browser.
     It represents the browser window or tab that contains your web page.

     Example-   console.log(),setTimeout(),setInterval(), clearInterval(),
                alert(),prompt(),confirm(),onload   */


// Display a prompt box
var userInput = window.prompt("Please enter your name:");
console.log("User entered:", userInput);


// Display an alert box
window.alert("This is an alert!");



// Run a function after a delay
window.setTimeout(function() {
    console.log("Delayed message");
}, 2000); 
