// What can I learn from the problem?
/*
P:

The vowel substrings in the word 'codewarriors' are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces,
return the length of the longest vowel substring. Vowels are any of aeiou.

Input: String
Output: number that represents the length of the longest substring

Rules/Questions:
- We can assume that the input would have no spaces

E:

Input ===> 'codewarriors' 

Substrings ===> o, e, a, io 

D: Arrays 

A:

What do I have to do?
I have to iterate through the string argument
  - when I find a vowel I create a substring 
Algo:
  - declare the solve function with one argument 
    - declare a variable regex = new regex 
    - declare a variable new string initialized
    - declare a length variable and initialize it to 0
    - iterate through the array for a for loop
      - if arr[index].length > length
      - reassign with the current length
    - return length

*/

function solve(string) {
  let regex = new RegExp('[^aeiou]', 'g')
  let newString = string.replace(regex, ' ').split(' ');
  let length = 0;
  for (let index = 0; index < newString.length; index++) {
    if (newString[index].length > length) {
      length = newString[index].length;
    }
  }
  return length;
}

solve('codewarriors');
solve('aeiouuuuuuhtpuugh');