// What can I learn from the problem?
/*
Problem: Write a function that finds the lowest index where
the left side of the index and the right equal the same

Input: Array
Output: the index where the right and the left equal the same 

Rules/Questions:
- If no index fits return a -1;
- If you are given an array with multiple answers, return the lowest correct index.

Examples:

findEvenIndex([1,1,2,1,1]); // will return index 2 because the left side === the right
findEvenIndex([1,2,3,4,3,2,1]); // return index 3 
findEvenIndex([1,100,50,-51,1,1]);// return index 1

Data structure: Array 

What do I have to do?
- I have to add the left side and the right side of the array of whichever index I am currently on
- I have to compare the sides and if they equal to one another return the index

Algorithm:
  - Declare the function with one parameter
   - iterate though the array with a loop
    - declare a variable left initialized to array.slice(0, index) and then the reduce method
    - declare a variable 'right' initialized to array.slice(index) and then the reduce method
      - if left === right
      - return index 
      - else 
      - return -1 
*/

function findEvenIndex(array) {

  for (let index = 0; index < array.length; index++) {
    let left = array.slice(0, index + 1).reduce((num1, num2) => num1 + num2);
    let right = array.slice(index).reduce((num1, num2) => num1 + num2);
    if (left === right) {
      return index;
    } else if (left !== right){
      continue;
    }
  }
  return -1;
}

console.log(findEvenIndex([1,1,2,1,1])); // will return index 2 because the left side === the right
console.log(findEvenIndex([1,2,3,4,3,2,1])); // return index 3 
console.log(findEvenIndex([1,100,50,-51,1,1]));// return index 1
console.log(findEvenIndex([1,2,3,4,5,6]));// return index 1