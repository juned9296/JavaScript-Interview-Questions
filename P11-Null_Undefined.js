/* Q- What is Difference Between Null & Undefined ?

Ans-  ➢ Null ⇢ null Repersente The Internal Absence of any Object Value. */

let user = {
    name: "John",
    age: 30,
};

// Clearing the age property
user.age = null;


                        //  while

/*  ➢ undefined ⇢ Indicates That a Varriable has been Decleared but that has
Not been assigned a Value.  */ 

let myVariable;
console.log(myVariable); // Outputs: undefined
