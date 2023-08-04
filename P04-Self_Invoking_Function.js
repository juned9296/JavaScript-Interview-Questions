// Q- What do you Mean by Self Invoking Function ?

// Ans- A Self Invoking Function is Invoked Automatically
// without being Called.

// A self-invoking function, also known as a self-executing function 
// or an Immediately Invoked Function Expression (IIFE), is a JavaScript 
// function that is defined and executed immediately after its creation.
// It's a common technique used to create a private scope for variables 
// and functions, preventing them from polluting the global scope.


//   ⦿ Example ⦿

(function(){
    let x = 'Juned Ahmad';
    console.log(x);
})();


// ⦿ Another  Example ⦿

(function() {
    const button = document.getElementById("myButton");
  
    function handleClick() {
      alert("Button clicked!");
    }
  
    button.addEventListener("click", handleClick);
  })();
  