/*
P: Write a function that given n number you return the number
of positive odd integers

Input: Number 
Output: Number 

Explicit Requirements:
- Return all the odd numbers from the gueven argumeent

Implicit Requirements:

E:

7 => 3 [1,3,5] // there are three odd numbers
15 => 7 [1, 3, 5, 7, 9, 11, 13] // there are 7 odd numbers

D: Numbers and Variables 

A:

START
SET the oddcount function
  SET a count variable 

  FOR LOOP to create a loop to output the information
  SET index = 0 
  WHILE idx < number argument 
  increment index
  SET Current Number varible 

  IF Current number % 2 === 1
  ADD 1 to the count variable
RETURN count variable
*/

function oddcount(number) {
  let count = 0;

  for (let index = 0; index < number; index += 1) {
    if (index % 2 === 1) {
      count += 1;
    }
  }
  return count;
}

console.log(oddcount(7));
console.log(oddcount(15));