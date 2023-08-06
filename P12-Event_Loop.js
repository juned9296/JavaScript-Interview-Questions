/* Q- What is the Event Loop ?

Ans- The Event Loop is a constentelly Running Process that
     monitor both Callback Queue & the Call Stack.

Call Stack:

 Think of the call stack as a to-do list. It's like the list of tasks
 you have in your mind. When you start doing something (like eating your food),
 it's added to the top of the list. You finish one thing before moving to the next.

Asynchronous Tasks:

 when your code needs to do something that takes time, like fetching data from 
 the internet, it doesn't just stop everything. It goes on to do other things while keeping 
 track of the task it's waiting for.

Callback Queue:
 Imagine you're chatting with your friends and playing games while waiting for your special dish.
 When your dish is ready, the waiter calls your name, and you leave your current tasks to get your food.

Callback Queue:
 In JavaScript, when a long task, like fetching data, is done, a "message" is added 
 to the callback queue. It's like the waiter calling your name. The event loop checks 
 this queue whenever the call stack is empty, just like you'd check if your food is ready
 when you're not busy. 


    ⦿ Example ⦿ */ 


console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 2000);

console.log("End");
