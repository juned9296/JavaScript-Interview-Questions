/*
Q. What is Event Handling in JavaScript ?

Ans- Event Handling Refers to the process of defining and corresponding 
     to event triger by user interaction like- Button Click, Mouse Hover

     Event are Handle using Event Listener which are function that execute 
     in respnse to specific event. 

 -- HTML  --  

 <!DOCTYPE html>
<html>
<head>
    <title>Event Handling Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <p id="message">Click the button to see the message.</p>

    <script src="script.js"></script>
</body>
</html>

--JS-- */


const button = document.getElementById("myButton");
const messageParagraph = document.getElementById("message");



button.addEventListener("click", function () {
  // Change the text of the paragraph when the button is clicked
  messageParagraph.textContent = "Button clicked!";
});
