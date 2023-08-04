// Q- Explain this keyword ?
// Ans- The "this" keyword is refernce varriable that refers to
// the current object. where it is called and when "this" is used
// alone, "this" refers to the Global Object;

//   ⦿ Example ⦿

let person = {
  FirstName: "Juned",
  LastName: "Ahmad",

  sayHello() {
    console.log(
      "Hello i am " + this.FirstName + " and I have a " + car.brand + " Car " +" his  model is " +car.model
    );
  },
};

let car = {
  brand: "Tata",
  model: "Safari",
};

person.sayHello(car);
