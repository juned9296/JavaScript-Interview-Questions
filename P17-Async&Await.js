/*
Qes. What is Async & Await ?

Ans-async and await are features in JavaScript that provide a more elegant
    and readable way to work with asynchronous code, particularly when dealing
    with Promises. They make asynchronous programming feel more synchronous,
    which can lead to code that is easier to understand and maintain. */

async function getAllUsers() {
  try {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

  } catch (error) {
    
    console.log(error);
  }
}
getAllUsers();
