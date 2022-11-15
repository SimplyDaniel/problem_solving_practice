// What can I learn from the problem?
/*
Problem: Write a function that returns an array a pair that equal to the number given 
the function has to return the smallest indecies

Input: An array of integers 
Output: Two elements that equal the number argument provided

Rules/Questions:
- If no indecies equal the umber argument return undefined

Examples:

sum_pairs([11, 3, 7, 5], 10);

sum_pairs([4, 3, 2, 3, 4],  6);


Data structure: Arrays 

What do I have to do?
- I have to find two elements that equal the number argument provided
-   

Algorithm:
  - declare the function sum_pairs with one argument 
    - iterate through the array with a loop
    - start in inner loop
    - if the total == sum 
      - return [array[index], array[jdx]];

    return undefined;
*/

// function sum_pairs(array, sum) {

//   for (let index = 0; index < array.length; index++) {
//     for (let jdx = 0; jdx < array.length; jdx++) {
//       let total = array[index] + array[jdx];
//       if (total === sum && index < array.length && jdx < array.length) {
//         return [array[index], array[jdx]];
//       }
//     }
//   }
//   return undefined;
// }

function sum_pairs(intArr, sum) {
  let seen = {};
  
  for (let idx = 0; idx < intArr.length; idx += 1) {
    let num = intArr[idx]; 
    let missingNum = sum - num;
    if (seen[num] !== undefined) {
      console.log(seen);
      return [seen[num], num]
    } else {
      seen[missingNum] = num;
    }
  }
  return undefined;
}

// console.log(sum_pairs([11, 3, 7, 5], 10)); //[3, 7] === 10
// console.log(sum_pairs([4, 3, 2, 3, 4], 6)); // [4, 2] === 6 
// console.log(sum_pairs([0, 0, -2, 3], 2)); // undefined
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7] === 10
