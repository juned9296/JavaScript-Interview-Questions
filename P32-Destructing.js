/*
Q- What is Destructuring in JavaScript ?

Ans- Destructuring is a feature in JavaScript that allows you
     to extract values from arrays or properties from objects 
     into distinct variables. It provides a concise and convenient 
     way to unpack values, making code cleaner and more readable

     */

     const numbers = [1, 2, 3, 4, 5];

     // Traditional way
     const first = numbers[0];
     const second = numbers[1];
     
     // Destructuring way
     const [Nfirst, Nsecond] = numbers;

     console.log(Nfirst);
     