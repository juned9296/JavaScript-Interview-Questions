/*
Q. What is Memorization ?

Ans-Memorization is an  Optimization technique that stores the result of the 
    function calls in a temporary data structure and then retrive the result
    whenever the stored result is needed. */

const memoAddition = () => {

  let cache = {};

  return (value) => {

    if (value in cache) {
      console.log("Fethcing from cache ");
      return cache[value];

    } else {
        
      console.log("calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};

const addition = memoAddition();
console.log(addition(20));
console.log(addition(20));
