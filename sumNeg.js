/*
P: Given an array of integers, return an array that has the num of all positive numbers 
and sum of all negative numbers

Input: An array of integers 
Output: the sum of negative integers and the sum of postive 

Explicit Requirements:
- If the array is empty or null return an epty array 

Implicit Requirements:

E:

D:

A:

SET the sumArray function with one paramter
  SET the positive count variable 
  SET the negative count variable 

  IF guard clause, if the array.length < 0 || nukll RETURN []

  FOR LOOP iterate though the inputArray
    IF index number pisitive++
    ELSE Negtive variable ++

  Return Postive varibale and begative variable 

*/

function sumArray(inputArray) {
  let postiveCount = 0;
  let negativeCount = 0;

  if (inputArray.length <= 0 || null) {
    return [];
  }
  // usuing for of loop
  for (const number of inputArray) {
    if (number > 0) {
      postiveCount += 1;
    } else if (number < 0) {
      negativeCount += number;
    }
  }
  // using for loop
  // for (let index = 0; index < inputArray.length; index++) {
  //   if (inputArray[index] > 0) {
  //     postiveCount += 1;
  //   } else if (inputArray[index] < 0) {
  //     negativeCount += inputArray[index];
  //   }
  // }
  return [postiveCount, negativeCount];
} 

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(sumArray([]));