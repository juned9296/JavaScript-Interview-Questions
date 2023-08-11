
// Q- What is Call Method in JavaScript?

// Ans- The Apply Methode used to set the this keyword independent 
// of how a function is called.The Apply methode Called the function immediately.
  
  
  let Student1 = {
          Name: "Juned Ahmad",
          Course: "B.Tech",
          Branch: "Cse",
          Age: 23,
          Designation: "Software Devloper",
        };

        let Student2 = {
          Name: "Mo Ali ",
          Course: "B.Tech",
          Branch: "Cse",
          Age: 23,
        };

        let PrintDetails = function () {
          console.log(this.Age);
        };
        PrintDetails.call(Student1);