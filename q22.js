/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript - Disemvowel Trolls

P: Write a function that removes all vowels from a string argument 

Input: String

Output: String with all vowels removed

Explicit Requirements:
- Must return a string with all vowels removed 

Implicit Requirements:

E:

disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")

disemvowel("No offense but,\nYour writing is among the worst I've ever read")

=> "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")

disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

D: Strings and RegExp

A:

Pseudocode:
  - I n eed to remove all vowels, I can use a regex 

Algo:
  - Write the disemvowel function
    - Declare a RegExp variable and initialize it to aeiou
    return string .replace(regexp, "");
*/

function disemvowel(string) {
  let regex = /[aeiou]/ig;
  return string.replace(regex, '');
}

console.log(disemvowel('aeioudaniel')) // dnl
console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!")

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")

console.log(disemvowel("What are you, a communist?")) //"Wht r y,  cmmnst?")