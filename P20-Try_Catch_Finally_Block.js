/*
try: It's used to wrap a block of code that might cause an exception 
     (error) to occur.

catch: It's used to catch and handle exceptions that were thrown 
       within the corresponding try block.

finally: It's used to specify a block of code that will always be executed, 
         regardless of whether an exception was thrown or not. It's often 
         used for cleanup tasks. */

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
