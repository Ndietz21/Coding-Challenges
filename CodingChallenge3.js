// First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
// For example: if the input sgit puistring is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) { 

    // code goes here
    
    return str.split("").reverse().join(""); 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));