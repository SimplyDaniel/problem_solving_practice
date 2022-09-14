/*

https://www.codewars.com/kata/5aff237c578a14752d0035ae - Predict your age!

P: Write a function that determines the age that will will pass

Input: An array of ages 
Output: A number with one age

Rules/Questions: 

- I have to multiply each number by itself 
- then add them all together
- Then take the square root of the result 
- Then divide the number by two 
- The result has to be rounded down 

E: 

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

4225
5625
3025
3600
3969
4096
2025

D: Array and Math Methods 

A:

Pseudocode:
  - 

Algo:
    - Write the function predictAge() 
    - declare a variable 'result' and initialize it to an empty array
    - iterate through the list using a for of loop 
      - push the current index * index into the result array
    - declare a variable 'sqrt' with the math sqrt
    - return the the sqrt variable / 2 with the math.floor method 
*/

// function predictAge(array) {
//   let result = [];

//   for (let index of array) {
//     result.push(index * index);
//   }

//   let total = result.reduce((a, b) => a + b);
//   let sqrt = Math.sqrt(total);

//   return Math.floor(sqrt / 2);
// }

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
  let numbers = [age1,age2,age3,age4,age5,age6,age7,age8];
  let result = [];

  for (const index of numbers) {
    result.push(index * index);
  }

  let total = result.reduce((a, b) => a + b);
  let sqrt = Math.sqrt(total);

  return Math.floor(sqrt / 2);

}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)) //=== 86
