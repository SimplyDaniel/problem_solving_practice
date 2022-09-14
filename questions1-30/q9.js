/*
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript - sum of minimums

P: Write a function that takes a 2D array. The array looks fot the smallest number
in the array and then add the sums of each small number within the array. 

Input: Nested Array
Output: Number - the sum of all the numbers 

Explicit Requirements:
- The array has to return the sum of all the smallest numbers within the nested arrays

Implicit Requirements:

E:

    [ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]
              0                  1                    2
Index:        [0][0]            [1][0]               [2]0]

D: Arrays 

A:

- Write the sumOfMinimums(array) function
  - Decalre a variable 'total' initalize it to empty array or 0
  - Decalre a variable 'sortedArray' initalize it to an empty array

    - Iterate through the array argument with a FOR IN loop
    - Push the array indexes sorted using the sort method into 'sortedArray';

    - iterate through the sorted array with a for loop
    - after each iteration increment index variable by 1 
    - push the [index][0] to result array
  
  - Return total.reduce();
*/

function sumOfMinimums(array) {
  let total = 0;
  let sortedArray = [];

  for (let index in array) {
    sortedArray.push(array[index].sort((a, b) => a - b))
  }

  for (let index = 0; index < sortedArray.length; index++) {
    total += sortedArray[index][0];
  }

  return total;
}
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));