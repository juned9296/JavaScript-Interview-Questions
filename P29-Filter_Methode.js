/*
Q- What is Filter methode ?

Ans- The filter method is another built-in function in JavaScript 
     that operates on arrays. It's used to create a new array containing 
     all elements from the original array that satisfy a given condition. 
     In other words, it filters out elements that don't meet the specified criteria. */


var ages = [20,40,23,12,32,15,17];
 var b = ages.filter(checkadult);
 console.log(b + " You are Not Adult");
 function checkadult(ages){
    return ages<=18;
 }
