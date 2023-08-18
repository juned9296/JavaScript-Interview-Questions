/*
Q. What is the Diffrence between in == & === in javascript ?

Ans- both are comparison operator .the difference between both the operator is that "==" is used to compare values. 
     where "===" is used to compare both the values and types.
    */

5 == "5"; // true, because the values are equal after conversion
5 === "5"; // false, because the values are not of the same type

true == 1; // true, because true is converted to 1
true === 1; // false, because they are not the same type

null == undefined; // true, because they are considered equal with type coercion
null === undefined; // false, because they are different types
