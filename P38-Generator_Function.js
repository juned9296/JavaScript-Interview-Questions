/*
Q- What is Generator Function in JS ?

Ans- In JavaScript, a generator function is a special type of function that
     allows you to control the flow of execution and produce a series of values
     over time generator functions can be paused and resumed, making them useful 
     for dealing with asynchronous operations and generating sequences of values lazily.


     Generator function mein jab aap yield statement ka istemal karte hain, toh function 
      ka execution uss point par ruk jata hai aur woh value, jo yield dwara return kiya gaya hai,
      wapas bhej di jati hai. Jab aap generator function ko phir se next() method ke dwara chalate
      hain, toh function wahi se chalu hoti hai jahan se woh ruki thi aur execution wahi se aage 
      badhti hai.
 */

     function* SimpleGenerator (){
        console.log("Function Called")
        let x = 100;

        yield "first Step";
        yield "Second Step";
        yield 40;
        yield x;

     }

     const SG = SimpleGenerator();
     console.log(SG.next().value);
     console.log(SG.next());
     console.log(SG.next());
     console.log(SG.next());
     console.log(SG.next());






     


    //  Another Example 

     function* numberGenerator() {
        console.log("Start");
        yield 1;
        console.log("After first yield");
        yield 2;
        console.log("After second yield");
        yield 3;
        console.log("End");
      }
      
      const generator = numberGenerator();
      
      console.log(generator.next().value); // 1
      console.log(generator.next().value); // 2
      console.log(generator.next().value); // 3

    //   Is example mein, numberGenerator generator function mein pehle yield ke baad execution 
    //   rukti hai aur "Start" print hota hai. Phir jab aap generator.next() ko pehli baar call 
    //   karte hain, toh function wohin se chalu hoti hai jahan se ruki thi aur "After first yield" 
    //   print hota hai. Is tarah se har baar jab aap generator.next() ko call karenge, function ek 
    //   step aage badhega aur yield ke baad wale code tak pahunchega.
      


      