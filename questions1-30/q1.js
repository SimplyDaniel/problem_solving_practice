/*
P:Write a function that takes a string argument and returns the leading substrings
the substring shuold return the first character of every word

Input: String
Output: Substrings of that string

Explicit Requirements:
- The substring has to be the first letter of the string and then leading

Implicit Requirements:

E:
leadingSubstrings('abc');      // ["a", "ab", "abc"]

D:

A:
SET the leadingSubstring function(string)
  SET the result variable and initialize it to an empty array
  LET stringSplit = string.split(' ');
  FOR LOOP iterate through the string varibale 
  SET the index an assign it to one 
  USE the slice push method and push the index to the result

Return Result with the join method 

- function leadingSubstring(string)
  LET result = [] 
*/

function leadingSubstrings(string) {
  let result = [];
  for (let index = 1; index <= string.length; index++) {
    result.push(string.slice(0, index));
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
