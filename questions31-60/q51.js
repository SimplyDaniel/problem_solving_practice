// What can I learn from the problem?
/*
Problem: Write a function that accepts a string and gets all the substrings of the string
and see if any of the substrings can create the string provided

Input: string 
Output: boolean true of false 

Rules/Questions:

Examples:

Input: 'abab'
Output: True 
'ab' + 'ab' substring can be used twice to create the string 

'abaababaab'

Data structure: Arrays 

What do I have to do?
- I have to find all the substrings of the string argument
- I have to see which of those substrings can be created to create the string argument (if any)

Algorithm:
  - declare the function that accepts one parameters
    - declare a substring variable 
      - declare a for loop that will create all the substrings in the variable 
      - while the substring.length < string.length 
        - add the substrings
      - if the substring is equal to the string 
      - return true
    - else return false  
*/

function repeatedSubstringPattern(string) {
  let substring = '';

  for (let index = 1; index < string.length; index++) {
    substring = string.slice(0, index);

    while (substring.length < string.length) {
      substring += substring;
    }

    if (substring === substring) {
      return true;
    }
  }
  return false;
}

console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba')=== false);
console.log(repeatedSubstringPattern('aabaaba')=== false);
console.log(repeatedSubstringPattern('abaababaab')=== true);
console.log(repeatedSubstringPattern('abcabcabcabc')=== true);