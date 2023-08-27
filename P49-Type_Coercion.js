/*
Q. What is Type Coercion in JavaScript ?

Ans. Type coercion in JavaScript refers to the automatic conversion of one data type to
     another when performing operations or comparisons, often leading to unexpected
     behavior if not handled carefully.

     There are two types of type coercion in JavaScript: implicit and explicit. 
     
     1-Implicit Type Coercion: */

      var num = 5;
      var str = "10";
      var result = num + str;
      console.log(result); // The result will be the string "510"
      
      //  2-Explicit Type Coercion:
      
      var str = "42";
      var num = Number(str); // Explicitly coerce the string to a number
      
      var value = 123;
      var strValue = String(value); 
      console.log(strValue);// Explicitly coerce the number to a string


