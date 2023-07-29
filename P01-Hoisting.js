
      // Q1- Explain the Hoisting in JavaScript?

      // // Ans- Hoisting is the default behaviour of JavaScript
      // where every varriable and Function() declariation moves
      // on the top not initialization.

      // For Example --

        a = 1000;
        console.log(a);
        var a;

      greet();
      function greet() {
        console.log("Good Morning");
      }
  
