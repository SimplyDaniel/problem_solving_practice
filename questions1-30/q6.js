/*
https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript -  Are the numbers in order?

P: Write a funciton that takes an array of integers and return TRUE 
if all the numbers are in aceding order. FALSE otherwise. 

Input: An array of inttergers 
Output: boolean 

Explicit Requirements:

- The numbers have to be in aceding order
- We can assume that all inpuets are valid

Implicit Requirements:
- The original array cannot be muated. 

E:

inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false

D: Arrays 

A:

- Write the inAscOrder() function
  - create a 'sorttedArray' variable to make a copy of the original array
    - use the .slice method
END 
*/


function inAscOrder(array) {
  let sortedArray = array.slice().sort((a, b) => a - b);

  // with for loop
  // for (let index = 0; index < sortedArray.length; index++) {
  //   if (array[index] !== sortedArray[index]) {
  //     return false;
  //   }
  // }
  // return true;

  // with FOR IN loop

  for (let number in sortedArray) {
    if (array[number] !== sortedArray[number]) {
      return false;
    }
  }
  return true;
}


console.log(inAscOrder([1,6,10,18,2,4,20])); // returns false;
console.log(inAscOrder([1,2,4,7,19])); // returns true
console.log(inAscOrder([1,2,3,4,5])); // returns true