/*
Q. What Is Event Deligation In JavaScript ?

Ans- Event Deligation in JavaScript is using a Single Event Listner
     on a Parent Element to handle event from its child element. it
     Reduce the code complexitiy by dynamically determine the event target. 

      Example ▶︎

 --HTML--
   <body>
         <div class = "Grandparent " id = "Grandparent">
          <div class = "Parent" id = "Parent"> <div class = "Child" id = "Child">
          </div>
         </div> 
         </div>
   </body>  

--JS-- Problem 

document.getElementById("Child").addEventListener('click',()=>{
    console.log("child clicked");
},false)
document.getElementById("Parent").addEventListener('click',()=>{
    console.log("Parent clicked");
},false)
document.getElementById("Grandparent").addEventListener('click',()=>{
    console.log(" Grandparent clicked");
},false)

Solution using Event Deligation  */

document.getElementById("Grandparent").addEventListener('click',(event)=>{

    if(event.target.id==="Child"){
        console.log("child clicked");

    }else if(event.target.id==="Parent"){
        console.log("Parent clicked");

    }else if(event.target.id==="GrandParent"){
        console.log(" Grandparent clicked");
    }
},false)

