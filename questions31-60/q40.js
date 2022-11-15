// What can I learn from the problem?
/*
Problem: Write a function that when given an array of numbers
it finds and returns the one that appears an odd number of times

Input: An array of numbers
Output: the number that appears an odd number of times 

Rules/Questions:
- What should I return if the argument is not an array of numbers?

Examples:

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).

 doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);

20 20 
1 1
2 2
3 3
5 5 5
4 4

Data structure: Object

What do I have to do?
- I have to return the element or number that appears odd times

Algorithm:
  - declare the function findOdd that accepts an array argument 
    - declare the object variable initialized to an empty object
    - iterate through the array argument with a loop
      - if the element does not exists in the object variable 
        - create it 
        - then increment the amount of times it appears in the array // test here
      - declare a loop that will iterate though the object 
        - if the object value % 2 === 1
          - return the key coerced to a number
*/

function findOdd(array) {
  let obj = {};

  for (const elem of array) {
    if (!obj[elem]) {
      obj[elem] = 0
    }
    obj[elem] += 1;
  }

  for (let key in obj) {
    if(obj[key] % 2 === 1) {
      return Number(key);
    }
  }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); //  10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1