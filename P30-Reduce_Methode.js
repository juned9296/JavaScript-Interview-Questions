/*
Q- What is Reduce Methode in JavaScript ?

Ans- The reduce method is another built-in function in JavaScript 
     that operates on arrays. It is used to iterate through the elements
     of an array and reduce them to a single value by applying a specified function.
     */

const arry = [80,70,50,30];
const b = arry.reduce(sum);
console.log(b);
function sum(acc, curr){
    sum = acc + curr;
    return sum;
}