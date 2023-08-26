/*
Q. What is Event & Type in JavaScript ?

Ans. An "event " in JavaScript refers to a specific action
     or occurrence that happens in a web browser, such as a click,
     key press, or page load.


      Event Type -

      1-Mouse Events: click, mouseover,mouseout,mousemove

      2-Keyboard Events: keydown,keyup,keypress

      3-Form Events: submit,input,change

      4-Window Events: load,resize,unload
      
      5-Focus Events: focus, blur

     Example.

     HTML-

     <button id="myButton">Click Me</button>

     JS- */

    const button = document.getElementById("myButton");

    // Adding an event handler for the "click" event
     button.addEventListener("click", function () {
     alert("Button clicked!");
     });
