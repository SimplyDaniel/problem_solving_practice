// What can I learn from the problem?
/*
Problem:

Given an array of numbers, for each number, find out how
many numbers in the array are smaller than it. When
counting numbers, only count unique values. That is, if a
given number occurs multiple times in the array, it
should only be counted once.

Input: An array of integers 
Output: An array with the count amount of each number 

Rules/Questions:
- If there are multiple occurrences of a number count it only once 

Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]

console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]


Data structure: Array and Objects

What do I have to do?

Algorithm:
  - declare the function smallter than current 
    - declare an object variable that will count the occurrences of the array elements
    - iterate through the array and count the instances 
    - then iterate through the array and object at the same time 
      - and if the current index is equal to the 
*/


function smallerNumbersThanCurrent(array) {
  let newArr = Array.from(new Set(array));
  let result = [];

  for (let idx = 0; idx < array.length; idx++) {
    let count = 0
    let current = array[idx];
    for (let jdx = 0; jdx < newArr.length; jdx++) {
      
      if (current > newArr[jdx]) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
