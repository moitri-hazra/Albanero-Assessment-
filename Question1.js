/*Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
formed by reversing the digits of 'x' without using any built-in methods for reversal. After
reversing the digits, determine whether the resulting number has any prime factors. If it does
have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'." */


function checkPrimeFac(x){
    if (x < 0) return 'Please enter a digit bigger than 0'; // If the X is 0 then it send an error
    let str = x.toString(); // converting to string to perform string operations 
    let newDigit ="";
    for (let i = str.length-1; i > -1; i--) {
        newDigit +=str[i]; // assigning in a reversed order.

    }
    return findPrime(parseInt(newDigit)); // calling findPrime() with reversed digit, turning it into integer 
}

function findPrime(n){
    let factors = []; 
    let divisor = 2;
    while (n > 1) {
        while (n % divisor === 0) { // If divided, adding this divisor list.
            factors.push(divisor); 
            n /= divisor; //updating the original number
        }
        divisor++; // incrementing 
    }
   if (factors.length !== 0){ // if list has elements the return Yes, otherwise No
    return "Yes - " + "[" + factors + "]" ; 
   }else{
    return "No";
   }
}

//testcases
console.log(checkPrimeFac(123));