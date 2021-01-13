
document.getElementById("fizzButton").addEventListener("click", function(){
    let num1 = document.getElementById("input1").value;    
    let num2 = document.getElementById("input2").value;
      
    let output = "";
    for (let loop = 1; loop <= 100; loop++) {
        //step 5: an if else/elseif/else
        if(loop % 3 == 0 && loop % 5 == 0){
            output += ` FizzBuzz,`;
        } else if ( loop % 3 != 0 && loop % 5 != 0){
            output += ` ${loop} `;
        } else if (loop % 3 == 0){
            output += ` Fizz, `;
    } else if (loop % 5 == 0){
            output += ` Buzz, `;
    }
}
    
    
    
    
    
    
    
    
    
   // for (let loop = 1; loop <= 100; loop++) {
        //step 5: an if else/elseif/else
        //if(loop % 3 == 0){
        //        output += `Fizz, `;
        //} else if (loop % 5 == 0){
          //      output += `Buzz, `;
        //} else if (loop % 3 == 0 && loop % 5 == 0){
          //  output += `FizzBuzz,`;
       // } else if ( loop % 3 != 0 && loop % 5 != 0){
         //   output += `${loop}`;
        //}
    //}

    document.getElementById("result").innerHTML = output

});

//if what what we have can be divided by both 3&5 with no remainder, then we get fizzbuzz. 
//On the other hand, if what we have can't easily divide by those two numbers, then it just prints the number
//for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
//It works, but I don't know how...