/*

https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript - Remove duplicate words

P: Write a function that removes the duplitcate words from a string argument.
Leaving only the single first words entry. 

Input: String
Output: String with duplicate words removed

Explicit Requirements:
- i have to remove all duplicate words
- I have to leave the first single words only

Implicit Requirements:

Questions: 

- What should I return if the input is not a string?

E:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

D: Strings 

A:

- Write the removeDuplicates() function
  - Declare and initialize a variable 'stringSplit' where the
    input string will be split into an array
  - Declare and initialize a 'results' varibale
  
  - Iterate through the 'splitString' array with a for in loop
    - If current index is not include current index 
    - push the iteratetion to the result varibale
  - Return result

*/

function removeDuplicateWords(string) {
  let stringSplit = string.split(' ');
  let result = [];

  for (let index in stringSplit) {
    if (!result.includes(stringSplit[index])) {
      result.push(stringSplit[index]);
    }
  }
  return result.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));