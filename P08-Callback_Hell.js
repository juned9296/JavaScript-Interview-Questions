// Q- What is the CallBack Hell ?

// Ans - CallBack Hell is a Phenomenon That Happens when
// Multiple CallBacks are Nested on top of Each other and
// it is also called Pyramid Of Dom.


setTimeout(()=>{
    console.log('Call To Hr');
       setTimeout(()=>{
          console.log('Hr called to Director');
               setTimeout(()=>{
                  console.log('Dierctor Called to me');
                     setTimeout(()=>{
                        console.log('I Update the Information');
                 },2000);
           },1000);
       },1000);
},2000);