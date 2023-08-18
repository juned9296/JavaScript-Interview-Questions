/*
Q. What is the Diffrence between in == & === in javascript ?

Ans- In JavaScript, == and === are comparison operators used to compare values. Here's the simple difference:

     == (Equality): This operator checks if two values are equal in terms of their content. It performs type coercion,
     which means it tries to convert the values to the same type before comparison if they are of different types.

     === (Strict Equality): This operator also checks if two values are equal, but it is more strict. It not only compares
     their content but also their data types. Both the values and their types must be the same for the comparison to be true.
    */

5 == "5"; // true, because the values are equal after conversion
5 === "5"; // false, because the values are not of the same type

true == 1; // true, because true is converted to 1
true === 1; // false, because they are not the same type

null == undefined; // true, because they are considered equal with type coercion
null === undefined; // false, because they are different types
