// What can I learn from the problem?
/*
P: Given a string s, find the length of the longest substring without repeating characters.

Input: string=

Output: length or string

Rules/Questions:
- Return the length of the longest substring?
- What does repeating chars mean in this question?
  - 'aaaabbcba' looks like its aaaaa, bbb, and also bcba
    - so the substring cannot have two of the same character string

E:
console.log(length_of_longest_substring('aaaabbcba')) == "cba"

D: String and Arrays 

What do I have to do?
- I have to find the length of the longest substring
  - I also have to find the longest substring 

Algo:
  - declare the function with one parameter 
    - declare a result variable initialized to an empty array 
    - iterate through the string with a loop
      - if the char === char + 1 continue 
      - else if  add to the result variable and does not include result include char // test here
      -result result or result.length  


      pedac
problem ====> function takes a string of alphabetical chars. 
returns the longest substring of chars where there are no repeating chars
example =====>"pwwkea"  would return 'wkea'
data structures ====> arrays, subarrays, then join("") back to string for return value.
algo====> 1) declare function lenghoflongest that takes one string argument. 
 2) inside the function body, declare a variable and initialize to the value of an empty array.
 3) interate over the string, slicing the value of the input string to each possible substring
and pushing the value into the empty array.
4) filter and iterate over the now populated array of substring. filter it to substrings
that do not repeat any chars.do that by splitting each substring into an array, and using the 
indexOf method to check to see if there are multiple characters in the array that contain 
the same char
return the sub with the longest length property. 
*/

// function length_of_longest_substring(string) {
//   let result = [];
//   for (let index = 1; index < string.length; index++) {
//     result.push(string.substring(0, index));
//   }

//   console.log(result);
// }

function length_of_longest_substring(string) {
  // Initialise an array to store the running characters and a longest string length variable
  let currentString = [];
  let longestStringLength = 0;

  // Loop through the provided string
  for (let i = 0; i < string.length; i++) {
      // Attempt to get the current character's position in the current string
      const currentCharacterPosition = currentString.indexOf(string[i]);

      // Check if the current character exists in the current string
      if (currentCharacterPosition !== -1) {
          // Chop the array off after the occurence of the character
          currentString.splice(0, currentCharacterPosition + 1);
      }

      // Add the current character to the array
      currentString.push(string[i]);

      // Store the current string length if bigger than the existing record
      longestStringLength = Math.max(
          longestStringLength,
          currentString.length
      );
  }

  console.log(longestStringLength);
};

length_of_longest_substring('aaaabbcba');