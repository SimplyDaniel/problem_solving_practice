// What can I learn from the problem?
/*
Problem:

Write a function that takes an array of integers and
returns the two numbers that are closest together in
value.

Input: an array of integers
Output: an array of who integers that are closest together in value related 

Rules/Questions:
- return two elements that are closest in value together 

Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11] idx 2, 3
let elem = array[index]
let newArray = []

console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27] idx 1, 4

console.log(closestNumbers([12, 7, 17]));             // [12, 7] idx 0, 1

Data structure: Arrays 

The range in all of these is 5 

What do I have to do?
- i have to return two elements that are closet together in value

Algorithm:
  -
*/

function closestNumbers(array) {
  let newArray = array.sort((a, b) => b - a);
  let result = [];

  
    console.log(newArray);
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11] idx 2, 3
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27] idx 1, 4