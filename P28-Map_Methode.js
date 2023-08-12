/*
Q- What is Map Methode ?

Ans- map is methode in JavaScript. it will itrate over an array and performance
     a computation. it will return a new array based on the result of function.
     this is a high order function. */


// Map() Methode


var arry = [80,70,50,30];
var b = arry.map(test);
console.log(b);
function test(x){
    return x*10;
}