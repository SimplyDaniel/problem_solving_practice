// What can I learn from the problem?
/*
Problem: Write a function that finds/returns the minimum number that needs to be inserted
to a list so that the sum is equal to the closest prime number

Input: array
Output: the number needed to make the sum of the array plus the number a prime

Rules/Questions:
- the function will return a number 
- The argument will always be an array of 2 +
-

Examples:

minimumNumber ({3,1,2}) ==> return (1)
3 + 1 + 2 = 6 => 6 is not a prime so we we keep adding to the number and then check if the number is a prime
then return that number 

Data structure: Arrays 

What do I have to do?
- I have to get the total of the elements of the input array 
- I have to find the number that adds to the total to see if that number is a prime 
- I have to check if that number is a prime 
- if that number is a prime number return that number that added to the total 

Algorithm:

- declare the isPrime function that will check weather the number is prime
  - declare a for loop 
    - initialize idx = 2
    - idx <= total 
    - index += 1 
    - if (number % index === 0) return false 
      - else return true

  -declare the main function minimum number 
  - reinitialize the array of numbers and use the reduce method 
  - declare a for loopx
  - idx = 0
  - idx < 1000000 
  - idx += 1 
  - if ( total + i is prime ) return i
  break
  - else if
  continue 

*/

function isPrime(number) {
  for (let idx = 2; idx < number; idx++) {
    if (number % idx === 0) {
      return false;
    }
  }
  return true;
}

function minimumNumber(number) {
  number = number.reduce((num1, num2) => num1 + num2);

  for (let idx = 0; idx < 1000000; idx++) {
    if (isPrime(number + idx) === true) {
      return idx;
      break;
    } else {
      continue;
    }
  }
  console.log(number);
}


// console.log(isPrime(13));

console.log(minimumNumber([3,1,2]));  // ==> return (1)
console.log(minimumNumber([2,12,8,4,6]));  // ==> return (1)
