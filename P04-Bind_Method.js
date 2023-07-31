// Q- What is Bind Method in JavaScript?

// Ans-The Bind Methode used to set the this keyword independent 
// of how a function is called. The Bind methode creates a copy of the 
// function and set this keyword,not call the function immediately.

  let Balak1 = {
    Name: "Juned Ahmad",
    Course: "B.Tech",
    Branch: "Cse",
    Age: 23,
    Designation: "Software Devloper",
  };

  let Balak2 = {
    Name: "Mo Ali ",
    Course: "B.Tech",
    Branch: "Cse",
    Age: 23,
  };

  let PrintDeatails = function () {
    console.log(this);
  };
  let newfun =PrintDeatails.bind(Balak1);
  newfun();










