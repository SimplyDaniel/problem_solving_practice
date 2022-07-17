/*

https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript - Longest vowel chain

P: Write a function that returns the length of the longest substring of 'aeiou'


Input: string
Output: number of the length of the longest substring 

Explicit Requirements:

- Return the longest length of the substring 
- The substring can only include 'aeiou'  

Implicit Requirements:
- What should I return if the string arg is empty?

E:
solve(" codewarriors ") 2
                  ^
        
solve("suoidea") 3

D: Strings 

A:

Pseudocode:
  - I have to include all vowels
  - I can use the substring method to take part of the substring

Algo:
  - 
*/

function solve(string) {
  let current = 0;
  let max = 0;

  for (let index = 0; index < string.length; index++) {
    if ('aeiou'.includes(string[index])) {
      current += 1
      if (current > max) {
        max = current
      } 
    } else {
        current = 0
      }
    }
    return max;
}

console.log(solve("codewarriors"))// 2
// console.log(solve("suoidea")) // 3 
// console.log(solve("ultrarevolutionariees")) // 3
// console.log(solve("strengthlessnesses")) // 1