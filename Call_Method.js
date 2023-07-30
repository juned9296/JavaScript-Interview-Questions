// Q- What is Call in JavaScript?

// Ans- The call Methode used to set the this keyword independent 
// of how a function is called & call methode creates a copy of the function & call the function immediately.
  
  
  
  
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