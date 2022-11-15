// What can I learn from the problem?
/*
Problem: Write a function that compares two arrays
The function will return true if the elements in array1 are the squares to any element in array2
all elements of array1 have to be includes in array2 for the function to return true;

Input: Two array elements  
Output: a boolean true if all element in arr1 squared are in arr2.

Rules/Questions:
- what should I return if arr2 is longer than arr1. 

Examples:

Data structure: Arrays and objects

What do I have to do?
- I have to compare the two arrays and see if the elements in arr1 squared are included in arr2
  - 

Algorithm:
  - declare the function comp
  - if arr1 or arr2 === null return false 
  - if arr2 lengths > arr1.length return false
    - declare an array variable and convert all the elements of arr1 and square them and then sort the arr
    - declare a new variable that will be initialized to the arr2 calling the sort method

    - iterate through a11 sorted 
      - iterate through arr2 sorted 
        - if the index of arr1 !== arr2 index the same 
          - return false
        - else continue 
      - return true
*/

function comp(arr1, arr2) {
  if (arr1 === null || arr2 === null) return false; 
  if (arr2.length > arr1) return false;

  let arr1Squared = arr1.map((elem) => elem * elem).sort((a, b) => a - b);
  let arr2Sorted = arr2.sort((a, b) => a - b);

  for (let index = 0; index < arr1Squared.length; index++) {
    if (arr1Squared[index] !== arr2Sorted[index]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361])); // true 
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361])) // false
console.log(comp([7, 2, 10, 4, 5, 10, 7, 5, 4, 8, 8, 3, 3, 0, 1, 6, 0, 8, 10, 7, 8],[25, 49, 49, 25, 64, 100, 16, 36, 100, 100, 1, 9, 64, 49, 4, 64, 1, 9, 0, 64, 16])) // false