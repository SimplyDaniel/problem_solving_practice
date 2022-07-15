/*

https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript - How many are smaller than me?

P: Write a function that outputs an array of numbers that are smaller than
the number at index[0].

Input: An array of integers 
Output: An array of integers

Explicit Requirements:
- The new array has to have the numbers smaller that the starting index
- 

Implicit Requirements:
- If the original array has a 0 still include the 0
- We still output the length of the array for example:
* Input [1, 2, 0] => Output [1, 1, 0]
1 1 0 

E:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

D: Arrays 

A:

- Write the smaller function()
  - Declare a variable named 'startNum' which will have the starting array index
  - Declare a variable names 'result' which will house the final array
  - Declare an 'endNum' variable and initialize it to 0

  - Declare a for loop


  - Return result 

*/

function smaller(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0; 

    for (let j = 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        count += 1;
      }
    }
    result.push(count);
  } 
  return result;
}

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]));
