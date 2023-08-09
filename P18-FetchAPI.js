/*
Q.  What is Fetch API in JavaScript ?

Ans-The Fetch Api is Built-In JavaScript Interface that Allows you to 
    make http request to fetch data from a server. it provides a simpler
    and more modern way to retrive data to compare older (XHR) XMLhttpRequest.
    
    with fetch api, You can Easily send Request and handle response using promises,
    making asynchronus data fetching in JavaScript.

⦿ Example 1   */

const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok, Status: ${response.Status}`
      );
    }
    return response.json();
  })

  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("I am Always Run");
  });

// ⦿ Using async & await

async function fetchingUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchingUserData();
