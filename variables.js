 /* Variables Types */
 var x = 'Hello'
 let y = 3
 const Z = "CONSTANT"
 
 
 /* var with Global Scope */
 
 console.log(x); //Output will be Hello
 {
     x= 2
     console.log(x) // Output will be 2
 }
 
 console.log(x) // in Global scope Output will be 2
 
 
 /* Let with Block Scope */
 
 console.log(y) //output will be 3
 {
     let y = 5
     console.log(y) // output will be 5
 }
  console.log(y) // again output will be 3
 
 
  /* Const with Block Scope */
 
  {
     const a = "Inner";
     console.log(a); // inner
   }
   console.log(a); // ReferenceError: a is not defined.