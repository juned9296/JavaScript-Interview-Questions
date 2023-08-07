/* Q- What is setTimeout in JavaScript ?

Ans- setTimeout is a function in JavaScript that allows you to schedule 
the execution of a function after a certain amount of time has passed. It is 
commonly used to create delays in the execution of code or to implement time-based 
behaviors in web applications. */

// syntax ➢ setTimeout(function, delay);

       // ex1;

for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

     // ex1 solution

for (var i = 0; i <= 5; i++) {
  function test(i) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
  test(i);
}

          // ex2;

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}
