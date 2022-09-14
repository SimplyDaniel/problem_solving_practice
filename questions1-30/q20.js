/*
https://www.codewars.com/kata/544aed4c4a30184e960010f4 - find the divisors 

P: Write a function that finds all the divisors of an input number
The function will return an array from smallest to largest
excluding 1 and the number itself. 

Input: A number

Output: an array with all the divisors

Explicit Requirements:
- Return all divisors in an array 
- Do not return one and the number itself 

Implicit Requirements:
- If the number is prime return the number 

E:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

D: Arrays 

A:

Pseudocode:
  - What is a divisor? -  A number the divides into another without a remainder
  - I have to find all divisors, I'm thinking iterate from 0 to the number 
  - If the umber % index === 0 push that index into array
  - if the number is a prime number return a string 

Algo:
  -  Write the divisors function with one parameter 
    - Declare a divisors variable initialize it to a empty array
    - Declare a FOR LOOP and initialize the index = 1 
    - Increment index by 1 
      - Declare an IF statement, if the number % index is === 0
      - Push that number into divisors variable
    - IF number % index === 1 
    - return string 
  - Return array
*/

function divisors(number) {
  let divisors = [];

  for (let index = 2; index < number; index++) {

    if (number % index === 0) {
      divisors.push(index);
    }
  }
  if (divisors.length === 0) {
    return `${number} is prime`
  }
  
  return divisors;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"