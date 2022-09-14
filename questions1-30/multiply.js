/*
P: Write a function that takes two array arguments and returns the product of combing all pairs


Input: Two array of numbers 
Output: One array of those nubers 

Explicit Requirements:

- The array must be sorted

Implicit Requirements:

E:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

[1, 2] // 2
[2,2] // 4
[2,3] // 6
[3,4] // 12
[4,4] // 16

D:

A:

SET the multiplyAll Pairs function 
  SET a result array function inialize it empty array
  Iterate though the arrays using the map method

*/

function multiplyAllPairs(array1, array2) {
  let result = [];
  array2.map((num1) => {
    array1.map((num2) => {
      result.push(num1 * num2);
    })
  });

  return result.sort((a, b) => a- b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));     // [2, 4, 4, 6, 8, 8, 12, 16]