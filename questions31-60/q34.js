/*
Problem: 
The maximum sum subarray problem consists in finding the maximum sum
of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
If the array is made up of only negative numbers, return 0 instead.
An empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

Input: An array of numbers
Output: the sum of the contiguous subarray

Rules/Questions: 
- If the array argument is empty return 0
- If all elements in the array are negative return 0

Examples:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]


Data structure: Arrays

What do I have to do?
- I have to get all subarrays of the argument 
- 

Algorithm:
  - declare the function maxSequence()
    - declare a variable that will have all the subarrays
    - declare a for loop that will get all the subarrays 
  - iterate through the subarrays array 
    - 
*/

function maxSequence(array) {
  let subArray = [];

  if (array.length <= 0) return 0;

  for (let idx = 0; idx < array.length; idx++) {
    for (let jdx = idx; jdx < array.length; jdx++) {
      subArray.push(array.slice(idx, jdx + 1));
    }
  }
  let totals = [];
  for (let elem of subArray) {
    let total = elem.reduce((num1, num2) => num1 + num2);
    totals.push(total);
  }
  if (totals <= 0) return 0;
  return Math.max(...totals);
}

// Test Cases
console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])===6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true