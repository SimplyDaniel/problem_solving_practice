/*
P: Write a function that takes a string argument and returns the highest and lowest numbers
The string will be seperated by white space. 

Input: String 
Output: String

Explicit Requirements:

Implicit Requirements:

E:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

D:

A:

SET the highAndLow(string) function 
  SET an empty array variable
  SET a sorttedString = string.split(' ').sort((a, b) => a - b);
  FOR LOOP iterate through the sortedString variable
  SET lastIndex =  atrtted array.length -1 
  
*/

function highAndLow(string) {
  let sorrtedString = string.split(' ').sort((a, b) => a - b);
  
  return `${sorrtedString[sorrtedString.length - 1]} ${sorrtedString[0]}`;
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"