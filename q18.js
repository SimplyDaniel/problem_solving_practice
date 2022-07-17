/*

https://www.codewars.com/kata/5815f7e789063238b30001aa - Wealth equality, finally!

P: Write a function that accepts an array with multiple elements
The list is the amount of wealth each person has. The function will have to evenly distribute it  

Input: An Array of different numbers
Output: An array with the same amount of elements but numbers are the same 

Explicit Requirements:
- I have to mutate the input array
- The is at least 1 number(citizen)

Implicit Requirements:

E:

Input:
[5, 10, 6]  >>> This represents: 10+ 5+ 6 = 21 / 3 = 7

           # citizen 1 has wealth 5           
           # citizen 2 has wealth 10
           # citizen 3 has wealth 6

Should be after the test:
 [7, 7, 7] >>> wealth has now been equally redistributed

D: Arrays 

A:

Pseudocode:
  - I have to total the numbers in the array
  - I have to divide by the length of the array 
  - I have to use that final number and add it to the array 
  - I have to mutate the array, but how?

Algo:
  - Write the redistributeWealth function 
    - declare a 'total' variable and use the reduce method on the argument
    - declare a length variable and initialize it to array.length
    - declare a 'evenAmount' variable and initialize it to total / length 
    
    - Use a for loop
      - declare index = 0
      - while index < length variable 
      - array.push(evenAmount)
*/

let array  = [5, 10, 6];

function redistributeWealth(array) {
  let length = array.length;
  let total = array.reduce((num1, num2) => num1 + num2);
  let evenAmount = total / length;

  for (let index = 0; index < length; index++) {
    array.shift();
    array.push(evenAmount);
  }
}
redistributeWealth(array);