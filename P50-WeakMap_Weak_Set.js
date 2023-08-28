/*
Q. What is WeakMap & WeakSet in JavaScript ?

Ans.
                        WeakMap                                              WeakSet
 1- Key-value pairs store karta hai, jahaan key ek                Unique objects ko store karta hai.
    object hota hai.

2-  Weak references maintain karta hai, jisse agar                Weak references maintain karta hai, jisse agar
    koi object reference nahi karta, to garbage                   obj ect ka koi reference nahi hai to garbage collection 
    collection use clean kar sakta hai.                           use clean kar sakta hai.

3-  Garbage collection process mein help karta hai                Garbage collection process mein help karta hai memory
    memory management mein.                                       management mein.

4-  Key mein only objects allowed hote hain.                      Only objects allowed hote hain.

5-  Use cases mein DOM elements ya objects ke references          Use cases mein unique objects ki set maintain karna ho jahan
    store karna ho jahan memory management zaroori ho.            memory management zaroori ho. */


    
// Creating a WeakMap
const weakMap = new WeakMap();

// Creating objects
const obj1 = { name: 'Juned' };
const obj2 = { name: 'Md Ali' };

// Adding key-value pairs to the WeakMap
weakMap.set(obj1, 'Data for Juned');
weakMap.set(obj2, 'Data for Md Ali');

// Accessing values from WeakMap
console.log(weakMap.get(obj1)); // Output: Data for Juned
console.log(weakMap.get(obj2)); // Output: Data for Md Ali

// Let's say we no longer need obj1
obj1 = null; // The reference to obj1 is removed

// Since obj1 is not referenced anywhere, it may be cleaned from the WeakMap
// However, this isn't guaranteed to happen immediately; it depends on the garbage collector's timing
console.log(weakMap.get(obj1)); // Output: undefined
   
    





// Creating a WeakSet
const weakSet = new WeakSet();

// Creating objects
const obj1 = { name: 'Saim' };
const obj2 = { name: 'Juned' };

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Checking if an object exists in the WeakSet
console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true

// Let's say we no longer need obj1
obj1 = null; // The reference to obj1 is removed

// Since obj1 is not referenced anywhere, it may be removed from the WeakSet
// However, this isn't guaranteed to happen immediately; it depends on the garbage collector's timing
console.log(weakSet.has(obj1)); // Output: false

                              
       
