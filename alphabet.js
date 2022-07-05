/*
P: Write a function that takes an array of strings
the function will return an array of numbers based on the
location of the alphabet. For example:

solve(['abcde', 'abffff']) // [5, 3]; 

Input: Array of strings
Output: An array of numbers

Explicit Requirements:
- The indecies have to be in the same location as the alphabet.
- Can concist of both uppercase and lowercase no spaces

Implicit Requirements:

E:

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

D: Arrays and Objects

A:
Actions to take:

SET the solve function with array argument
  SET an array with the whole alphabet
  SET the array argument to lowercase variable and split it // dont need
  SET result array
  FOR LOOP iterate through the array argument with foreach
    Use the callback function and the index 
    IF The array argument === alphabert array[i]
    ADD to the count and push it to the rsult array
  RETURN result array
*/

function solve(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let resultArray = [];

  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let innerIndex = 0; innerIndex < array[index].length; innerIndex += 1) {
      if (array[index][innerIndex].toLowerCase() === alphabet[innerIndex]) {
        count += 1;
      }
    }
    resultArray.push(count);
  }
  return resultArray;
}

console.log(solve(["abode","ABc","xyzD"])); // = [4, 3, 1]
