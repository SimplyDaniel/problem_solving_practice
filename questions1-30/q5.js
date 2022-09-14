/*

https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript - Friend or Foe?

P: Write a program / function that takes an aray of strings with your friends names
if the string has exactly 4 letters in it they are your friend, otherwise they are a foe.

Input: An array of strings with your friends names

Output: an array with only your friends names with a length of four 

Explicit Requirements:
- The string has to be the length of 4
- Keep the original order of the names

Implicit Requirements:

E:

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

D: Arrays 

A:

- Write the friend function()
  - Declare a results variable
  - Iterate through the array input with a FOR OF
    - If the current iteration length === 4
    - push the iteration to the 'results' variable
  - Return results 
*/

function friend(array) {
  let result = [];

  for (let name of array) {
    if (name.length === 4) {
      result.push(name);
    }
  }
  return result;
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));