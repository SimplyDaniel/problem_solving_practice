/*
https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript - Find the middle element 

P: Write a function that will accept an array of three elements. 
The array will have numbers I have to return the index 
if the number that lies between the two other elements.

Input: An array of three elements 
Output: An index with the middle number 

Explicit Requirements:t
- return the index

Implicit Requirements:

E:
gimme([2, 3, 1]) => Index 0 because number 2 is in between  3 and 1 
gimme([5, 10, 14]) => 


D: Arrays 

A: 
Pseudocode:
  - I know I need to iterate over the input argument
  - I need to compare ech index with one another and see which one falls in between 
  - Easiest way seems to sort the array and then compare eh values and if they match return the index of the input arg

Algo:
  - Write the gimme() function
    - declare a 'sortedArray' Variable and use the sort method 
    - Iterate through the input array 
    - Compare the index of sortedArray and input array 
    - if they match return the index 
*/

function gimme(array) {
  let arraySlice = array.slice();
  let sortedArray = arraySlice.sort((a, b) => a - b);

  for (let index = 0; index < array.length; index++) {
    if (array[index] === sortedArray[1]) {
      console.log(index);
    }
  }
}

// gimme([2, 3, 1]);
// gimme([5, 10, 14]);
// gimme([-3,-100,-7]);
gimme([5.9, 10.4, 14.2], 1); // 1
gimme([-2, -3, -1]) // 0
gimme([-5, -10, -14]) // , 1);
gimme([-2, -3.2, 1]) // , 0);
gimme([-5.2, -10.6, 14])// , 0);

