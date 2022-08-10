/*

https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript - WeIrD StRiNg CaSe

P: Write a function that accepts a string and returns a string with all the even indexes capitalizes
and all the odd indexes lower cased. 

Input: String
Output: a StRiNg with all the odd indexes lowercased and even indexes uppercase 

Rules/Questions:

- All the even have to be uppercases and all the odd numbers have to be lowercased
- I need to start over for each word

E:
toWeirdCase( "String" );//=> returns "StRiNg"
"StRiNg"
 012345 
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

WeIrD StRi
0123456789
TFTFTFTFTF - In this example the odd indexes are starting to get capitalized 
N g   C a S  e
10111213141516
TFTFTFT


D: strings

A:

Pseudocode:
  - 

Algo:
  - Write the toWeirdCase string 
    - Declare a variable that will split the string into an array
    - Declare a result variable
    - 
*/


function toWeirdCase(str) {
  return str.split(' ').map(word => {   
    let newWord = '';
    console.log(`this is the callback: ${word}`);
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }  
    return newWord;
  }).join(' ');         
}

console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe