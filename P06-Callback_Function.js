// Q- What is CallBack Function in JavaScript ?

// Ans - A CallBack Function is Function that is Passed
// as an arguments to another Function to be "CallBack"
// at later at time.

//   ⦿ Example ⦿

function fetchData(CallBack) {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    CallBack(data);
  }, 2000);
}

function processdata(data) {
  console.log(data.map((item) => item * 10));
}

fetchData(processdata);








