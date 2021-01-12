//this is an anonymous function named loop

document.getElementById("fizzButton").addEventListener("click", function(){
    let num1 = document.getElementById("input1").value;    
    let num2 = document.getElementById("input2").value;
    if(num1>num2)   {
        alert("Number 1 must be less than number 2")
    }else{
        runTheNumbers(num1,num2);
    }
});

//this is the named function. This will only run when something calls it
function runTheNumbers(num1,num2){
    for (let loop = num1; loop <= num2; loop++){
        document.getElementById("result").innerText += loop;
    }
}

//the premise is to take inputs to find all of their multiples between 1 and 100
//if the loop is a multiple of 1 = fizz case
//loop multiple of 2 = buzz case
//loop multiple of both input = fizzbuzz case
//this order is VERY important