/*
https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript - Anagram detection 

P: Write a function that returns true or false is the test string argument is an anagram or the original
An anagram is a the result of the of rearraging the letters of a word to produce a new word.


Input: Two arguments that are strings
Output: boolean 

Explicit Requirements:
- Returns true is the word is an anagram 
- The words are case insensitive
Implicit Requirements:


E:

("dumble", "bumble"), false

("Twoo", "WooT") - true
D: Strings 

A:

- Write the isAnagram function with two parameters();
  - create a variable where the anagram will be lowercased 
  - Iterate through the original argument
    - Compare the 'original' argument with the 'anagram' argument character by character
    - If the current character of 'original' is included in the anagram string
      - continue
    - else return false 
  - return true
*/

function isAnagram(original, anagram) {
  let anagramLow = anagram.toLowerCase().split('').sort().join('');
  let originalLow = original.toLowerCase().split('').sort().join('');

  return anagramLow === originalLow ? true : false;
}
console.log(isAnagram("foefet", "toffee")); // ftrue
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("Twoo", "WooT")); // true
