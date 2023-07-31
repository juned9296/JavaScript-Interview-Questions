// Q- What is the Differnce between let, var, const?

// ans- VAR ▶︎ if we declare a varriable from  the var,
// then we can also declare it again with the same name
// and also re-asign its value. var is the Global Scope
// varriable and we can Access it through the window objects.

//   ⦿ Example ⦿

var myname = "Frontend";
var myname = "Devloper "; // here I declare it again & re-asign its value.
console.log(myname);

// Let ▶︎ If we declare a varriable with let then we can not
// declare it again with same name But we can Re-asign its value.
// let is the block scope varriable we can access it in only {}.

//   ⦿ Example ⦿

let name = "Frontend";
name = "Devloper";
console.log(name);

// Const ▶︎ And If we declare varriable with const then we can
// neither declare it again nor can re-asign its value.

//   ⦿ Example ⦿
const Name = "Frontend Devloper";
console.log(Name);
