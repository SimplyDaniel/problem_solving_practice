/*
https://www.codewars.com/kata/5949481f86420f59480000e7 - Odd or Even?

P: Given a list of integers determine weather the sum of the elements are odd or even

Input: An array of integers 
Output: A string "odd" or "even"

Explicit Requirements:
- must return a string
- if the array is an empty array consider is [0] so return even?

Implicit Requirements:

E:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

D: Arrays and Array methods 

A:

- Write the oddOrEven function()
  - declare a variable names total = array.reduce() and use the Math.abs method
  - If the array length is === 0 return 'even'
  
  - If the array total % 2 === 0 return the string "even"
  - else if the total % 2 === 1 return "odd"

*/

function oddOrEven(array) {

  if (array.length === 0) {
    return 'even';
  }

  let total = Math.abs(array.reduce((num1, num2) => num1 + num2));

  if (total % 2 === 0) {
    return 'even';
  } else if (total % 2 === 1) {
    return 'odd';
  }
}
 
console.log(oddOrEven([0, 1, 4])); //odd
console.log(oddOrEven([0, -1, -5])); // even
console.log(oddOrEven([0])); // even
console.log(oddOrEven([])); // even

