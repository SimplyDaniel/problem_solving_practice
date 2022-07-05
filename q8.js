/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript -  Shortest Word 

P: Write a function that returns the shorest string value

Input: String 
Output: Number

Explicit Requirements:
- Return the length of the shortest string

Implicit Requirements:

E:

'Hello daniel how is your day going?' // 2 for the word 'is

D: Strings arays

A:

- Write the findShort(string)
  - Decalre a varible 'stringSplit' to split the string into an array
  - Declare a variable 'sortedLengthArray' intailized to an empty array;
  
  - Iterate through the 'stringSplit' array using a for in loop
    - Declare a variable 'wordLength' and initalize it to the indexs lengths
*/

function findShort(string) {
  let stringSplit = string.split(' ');
  let wordLengthArray = [];

  for (let value in stringSplit) {
    let wordLength = stringSplit[value].length;
    wordLengthArray.push(wordLength);
  }

  let sortedArray = wordLengthArray.sort((a, b) => a - b);

  return sortedArray[0];
}

// console.log(findShort('Hello daniel how is your day going?'));

console.log(findShort("ProofOfWork Ethereum Bitcoin"));

// function findShort(string) {
//   let stringSplit = string.split(' ');
//   let wordLengthArray = [];

//   for (let value in stringSplit) {
//     let wordLength = String(stringSplit[value].length).split('');
//     wordLengthArray.push((Number(wordLength)));
//   }
//   let sortedArray = wordLengthArray.sort((a, b) => a - b);

//   return sortedArray[0];
// }