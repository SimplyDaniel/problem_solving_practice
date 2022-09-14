/*
P: Find Multiples of a number -  https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

Input: Input will be two integers 
Output: multiples of the number to the limit in an array

Rules/Questions: 
- The function will take two arguments an integer and a limit 
- If the limit is a multiple of the integer it should be included

E:
findMultiple(2, 6) // [2, 4, 6]

D: Arrays

A:

Pseudocode:
  - 

Algo:
  - Declare the function 'Find Multiple'
    - Declare an empty array variable 'multiples'
    - Declare a for loop 
      - index = integer
      - index <= limit
      = index += 1 
        - IF the index % 2 === 0 
        multiples.push(index)
      - return multiples 
*/

function findMultiple(integer, limit) {
  let multiples = [];

  while (integer <= limit) {
    if (integer % 2 === 0) {
      console.log(integer);
      multiples.push(integer);
    }
    integer++
  }
  console.log(multiples);

  // for (let index = integer; index <= limit; index++) {
  //   if (index % 2 === 0) {
  //     multiples.push(index);
  //   }
  // }
  // console.log(multiples);
}

// findMultiple(2, 6);
findMultiple(5, 25);
