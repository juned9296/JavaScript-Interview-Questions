/*

Q. What is Dom in JavaScript ?

Ans.Dom Stands For document object Model.It is a programing Interface
    for html and xml document. it defines the logical structure of the 
    document and the way a documents is accessed and manupulated.  */




// Accessing and modifying an element's content using the DOM
var headingElement = document.getElementById("myHeading");
headingElement.textContent = "Hello DOM Manipulated!";




// Adding an event listener using the DOM
var buttonElement = document.getElementById("myButton");
buttonElement.addEventListener("click", function () {
  alert("Button clicked!");
});
