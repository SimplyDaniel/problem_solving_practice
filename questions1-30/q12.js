/*
https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript - substring fun

P: Write a function that takes an array of words and concatenates the `n`th letter 
to construct a new word and should be returns as a String

Input: An array of words 
Output: String 

Explicit Requirements:
- Must return a string 
- Has to be the Nth letter from every word

Implicit Requirements:

E:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
[0][0]   [1][1]  [2][2]  --> 

D:

A:

- Write the nthChars function 
  - Declare a 'result' variable and initialize it to an empty array
  - Declare a variable 'char' and initialize it to a number 
  - Iterate through the array argument using a FOR LOOP
  - At each iteration increment the index variable within the for loop
    and the 'char' variable by 1
  - push the word and the char variables to the result variable 
  - return result.join('');
*/

function nthChar(array) {
  let result = [];
  let char = 0;

  for (let index = 0; index < array.length; index++) {
    result.push(array[index][char]);
    char++
  }
  return result.join('');
}

console.log(nthChar(["yoda", "best", "has"]));
console.log(nthChar(['daniel', 'daniel', 'daniel']));
