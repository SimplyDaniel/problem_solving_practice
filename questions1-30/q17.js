/*
https://www.codewars.com/kata/62cecd4e5487c10028996e04 - Race ceremony 

P: Write a function that accepts a number argument and returns an array with three numbers.
The numbers will be 2nd, 1st, and 3rd. The 1st place will have the highest number blocks,
the 

Input: Number
Output: An array with the numbers available 

Explicit Requirements:

Implicit Requirements:

E:

11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]

D: Arrays 

A:

Pseudocode:
  - write a function that accepts a number argument 
    - declare a variable that is initialized to do the number / by 3 + 1 
*/


function racePodium(blocks) {
  let first = Math.ceil(blocks/3)+1;
  let second = first - 1;
  let third = blocks-first-second;
  if (third == 0) {
    third = 1
    second -= 1
  }
  return [second,first,third];
}