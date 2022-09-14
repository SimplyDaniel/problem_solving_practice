/*

https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript - Find the next perfect square!

P: Write a function that returns the next perfect square, iF the number is a perfect square

Input: Number
Output: Number

Explicit Requirements:

- The function will return a perfect square the next perfect square
- If the number is a not a perfect square return -1 

Implicit Requirements:

E:

121 --> 144 
625 --> 676
114 --> -1 since 114 is not a perfect square

D: Arrays and Numbers 

A:
Pseudocode:
  - What is a perfect square? 
    - a number that is multiplied by itself example 11 * 11 = 121
  - I have to test the input argument to see if the number is a perfect square
  - How should test it? I can use the math sqrt function 
    - if it is i have to return the next one
     - but how? - I could increment a variable 1 by 1 and test the iterations after the perfect square
     if the number is a perfect square return the index variable else return false 
Algo:
  - Write the square helper function(number) to test if the number is a square
    - return Math.sqrt() % 1 === 0
  
  - Write the findNextSquare(number) main function
    - if the square(number) === true 
      - Use a while loop
      - let index = number
      - increment index 
      - if square(index) return index 
    - else return -1 

*/

function square(number) {
  return Math.sqrt(number) % 1 === 0;
}

function findNextSquare(number) {
  if (!square(number)) return -1;

  let index = number;

  while (square(index !== true)) {
    index += 1

    if (square(index)) {
      return index;
    }
  }
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

