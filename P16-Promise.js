/* 
Q- What is Promises in JavaScript ?

Ans- A Promise in JavaScript is an Object Repersinting the Eventual 
Completion or Failure of an Asynchronus Operation and Its resulting value.
its a Way of Handling Asynchronus Code In a More Readable and Predectible Way.

A Promise Has Three states:
1- Pending
2- Resolve 
3- Reject

*/

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "Kaluwa" };
    resolve(data);
  }, 2000);
});

fetchData
  .then((response) => {
    console.log("Data Fetched : ", response);
  })
  .catch((error) => {
    console.error("Error : ", error.message);
  });
