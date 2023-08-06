/* Q- What is the diffrence between Normal Function & Arrow Function ?

Ans- Rugular Function are constructible,they can be called using new keyword.
However the Arrow Function Are only Callable not constructible. */

//  ◾️ Regular (Normal) Function - Constructible:

function Person(Name, Age) {
  this.Name = Name;
  this.Age = Age;
}

const CreateInstances = new Person("Juned Ahmad", 23);
console.log(CreateInstances);


// Arrow Function - Not Constructible:

const PersonArrow = (name,age) => {
    this.name = name;
    this.age = age;
  };
  
  const personInstanceArrow = new PersonArrow("Bob",23); // Error: PersonArrow is not a constructor
  


//   Scope of this within Methods:

const person = {
    name: "Alice",
    
   
    greetRegular: function() {
      console.log("Hello, " + this.name);
    },
  
   
    greetArrow: () => {
      console.log("Hello, " + this.name); // 'this' here refers to the global object
    }
  };
  
  person.greetRegular(); // Output: Hello, Alice
  person.greetArrow();   // Output: Hello, undefined
  