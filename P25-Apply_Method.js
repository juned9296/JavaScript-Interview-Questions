
// Q2- What is Apply Method in JavaScript?

// Ans- The Apply Methode used to set the this keyword independent 
// of how a function is called.The Apply methode Called the function immediately.
// it takes an arguments in Form of Array. 


let Candidate = {
  Name: "Juned Ahmad",
  Course: "B.Tech",
  Branch: "Cse",
  Age: 23,
  Designation: "Software Devloper",
};

let Candidate2 = {
  Name: "Mo Ali ",
  Course: "B.Tech",
  Branch: "Cse",
  Age: 23,
};

let PrintDeatails = function (State, Country) {
  console.log(this.Name + " " + State + " " + Country);
};
PrintDeatails.apply(Candidate, ["Utter Pardesh", "India"]);
