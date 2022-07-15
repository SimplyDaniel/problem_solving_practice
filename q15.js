/*
https://www.codewars.com/kata/5648b12ce68d9daa6b000099 - Number of People in the Bus


P: Write a function that returns an an integer. The array will accept an array with nested arrays as pairs
The first element of the array is how many people get in
and the second element of the array is how many people get off

Input: An array
Output: A number

Explicit Requirements:
- I have to return a number

Implicit Requirements:

E:

number([[10,0],[3,5],[5,8]]),5);
[10,0] + 10 people / 0 leave 
[3,5] +3 people / 5 leave 
[5,8] +5 people / 8 people leave

= 18 in - 13 people out = 5 remaining on bus

number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)

in  3 + 9 + 4 + 12 + 2 + 6 + 7 = 41
out 0 + 1 + 10 + 2 + 1 + 10 = 24

D: Arrays 

A:
Pseudocode:
  - I need to iterate through the nested arrays 
  - I know I need to add all the 0th nested array, but how?
  - I know I need to add add the numbers at index 1 of the nested arrays, but how?
  - I need to compute the sum of all numbers at index 0 and minus the sum of index 1
  - Return the final output

Algo:
  - Write the number function()
    - Declare a variable 'passengerIn' 
    - Declare a variable 'passengerOut'

    - Iterate through the nested array with a for in loop
    - At each iteration add the number at index [0] to 'passengerIn'
    - At each iteration add the number at index [1] to 'passengerOut'
  
  - Return passengerIn - passengerOut
*/

function number(array) {
  let passengerIn = 0;
  let passengerOut = 0;

  for (let number in array) {
    passengerIn += array[number][0];
    passengerOut += array[number][1];
  }
  return passengerIn - passengerOut;
}

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[10,0],[3,5],[5,8]]));
