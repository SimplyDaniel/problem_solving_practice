/*
P: Write a function that returns the count of pairs in the array.


Input: And array if integers 
Output: number

Explicit Requirements: 
- If the array is empty or no pairs return 0
- if there are more pairs of the same number 
[0,0,0,0] return 2 


Implicit Requirements:

E:

[1, 2, 5, 6, 5, 2]  -->  2
[2,5,5,2]
[2,2,5,5]

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
[2,2,20,20,2,2] 
[2,2,2,2,20,20] = 
 0 1 2 3 4 5 6 7
  1 2 3 4


D:

A:

SET duplicates function 
  SET a pair count variable 
  SET a sorretd array varible 
  FOR LOOP iterate though the array
  SET index = 0
  WHILE index < array argument 
  Increment index
  IF the current iteration is equal to the index + 1 
  ADD to the pair count varible 
RETURN count variable 
*/

function duplicates(array) {
  let pairResult = 0;
  let sorrtedArray = array.sort();

  for (let index = 0; index < sorrtedArray.length; index++) {
    if (sorrtedArray.length <= 0) return 0;

    if (sorrtedArray[index + 1] ===  sorrtedArray[index]) {
      pairResult += 1;
      index += 1
    }
  }
  return pairResult;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]))
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log(duplicates([]));