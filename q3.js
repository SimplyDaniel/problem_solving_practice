/*
https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

P: Write a function that removes the smallest rating from an array
The function cannot mutate the original array.

Input: An array 
Output: an array with the lowest rating removed

Explicit Requirements:
- The oriiginal array cannot be modified 

Implicit Requirements:

E:

Input: [1,2,3,4,5], output= [2,3,4,5]
Input: [5,3,2,1,4], output = [5,3,2,4]
Input: [2,2,1,2,1], output = [2,2,2,1]

D: Arrays

A:

FUNCTION create the removeSmallest function();
  LET create a new array initalize it to an empty array

  FOR OF Loop to iterate over the values of the array
    IF the current index > index + 1 
      PUSH index
    ELSE IF index < index + 1 continue;
  return result 
*/


function removeSmallest(array) {
  let resultArray = [];
  let minimumNuber = array.indexOf(Math.min(...array));
  
for (let index = 0; index < array.length; index++) {
  if (index !== minimumNuber) {
    resultArray.push(array[index]);
  }
}
  console.log(resultArray);
}

removeSmallest([1,2,3,4,5]);
removeSmallest([9,2,3,4,5]);