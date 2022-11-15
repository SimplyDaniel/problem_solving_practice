// What can I learn from the problem?
/*
Problem: write a function that accepts an array argument
the array will have number elements and we have to find the unique one

Input: Array 
Output: the number that is unique

Rules/Questions:
- I have to find the unique number 
- The array will always have 3 elements
- The test have huge numbers

Examples:

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2

findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

Data structure: Arrays 

What do I have to do?
- I have to find the unique number 

Algorithm:
  - declare the function that accepts an array
    - declare a loop that will iterate through the array of numbers
      - if idx === idx + 1 
        - continue 
      - else if (idx !=== idx + 1)
        - return the idx + 1
*/

function findUniq(array) {
  let obj = {};

  for (let num of array) {
    if(!obj[num]) {
      obj[num] = 0;
    }
    obj[num] += 1;
  }

  for (let key in obj) {
    if (obj[key] <= 1) {
      return Number(key);
    }
  }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // === 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])) // === 2

