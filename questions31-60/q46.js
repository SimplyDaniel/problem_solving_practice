// What can I learn from the problem?
/*
Problem:

Write a function that takes one argument, an array of
integers. The function should return minimum sum of 5
consecutive numbers in the array. If the array contains
less than 5 elements, the function should return null.

Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

The tests above should each log "true".

Input: An array if integers
Output: a boolean true of false 

Rules/Questions:
- If the array length is less than 5 return null 
- The function has to return the minimum sum of 5 consecutive numbers
- The minimum sum has to be a total of 5

Examples:

Data structure:

console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);

[1, 2, 3, 4, 5] = 15
[2, 3, 4, 5, -5] = 9

console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
[1, 2, 3, 4, 5] = 15
[2, 3, 4, 5, 6] = 20

What do I have to do?
- I have to get the sub arrays of the array and they all have to be a length of 5 
- I have to sum up up those integers and then return the lowest one 

Algorithm:
  - declare the function minimumSum that accepts an array of integers
    - declare a sum variable thar will have the sum of the array
    - declare a array length variable that will be initialized to 4 
    - iterate through the array and create sub arrays at every index but the array has to be less than 5
      - sum the subarray that have a length of 5 
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let sum = [];
  let arrayLen = 4;
  for (let index = 0; index < array.length; index++) {
    arrayLen += 1;
    let subArray = array.slice(index, arrayLen);
    if (subArray.length >= 5) {
      let total = subArray.reduce((num1, num2) => num1 + num2);
      sum.push(total);
    }
  }
  return Math.min(...sum);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);