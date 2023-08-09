/*
Q.   What is JSON in JavaScript ?

Ans- JSON stands for JavaScript Object Notation. It is a Formate for 
     Storing and exchanging data. it uses Key-value-pairs and is commonly
     used for communication between a server and a client.

*/

json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction",
  "isAvailable": true
};

 /* In this example:

"title", "author", "publishedYear", "genre", and "isAvailable" are the keys.
"The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction", and true are the corresponding values.

On the client side */

const jsonData = '{ "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publishedYear": 1925, "genre": "Fiction", "isAvailable": true }';

const bookInfo = JSON.parse(jsonData);

console.log("Book Title:", bookInfo.title);
console.log("Author:", bookInfo.author);
console.log("Published Year:", bookInfo.publishedYear);
console.log("Genre:", bookInfo.genre);
console.log("Availability:", bookInfo.isAvailable ? "Available" : "Not Available");
