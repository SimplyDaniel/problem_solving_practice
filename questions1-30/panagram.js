
/*  Detect Pangram
  A pangram is a sentence that contains every single letter of the alphabet at least once. Case is irrelevant.

  Create a function that returns a boolean based on whether a given string is a pangram. 

P: Write a function that test weather a string argument has every single letter of the alphabet

Input: String of alphabetic characters 
Output: Bloean

Explicit Requirements:
- The function has to return true only if the string has every single letter of the alphabet ones

Implicit Requirements:
- is the string contains special charaters dont include
  but if the string still has whole alphabet return true.

Questions: 

- What should the function return if the argment is an empty sting or non string type?
- What is there are two sentences? Example 
  'this is a sentence. This is also a sentence'; if both sentences contain whole alphabet return true?
E:

D:

A:

SET the isPanagram function with one parameter
  SET a varible with the string alphabet

  FOR OF loop to iterate through the string alphabet
  IF the string does not include the character
    Return False 
  Return true 

*/

function isPangram(string) {
  let lowercase = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrtsuvwxyz';

  for (let charater of alphabet) {
    if (!lowercase.includes(charater)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.") === true);
console.log(isPangram("The quick br!own fox jum%ps over, th(e lazy dog.") === true);
console.log(isPangram("This thing is not a pangram.") === false);