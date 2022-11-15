// What can I learn from the problem?
/*
Problem: Write a function that finds the multiples of 3 and 5 of a argument
provided and then the function will return the sum

Input: Number 
Output: multiples of 3 and 5 of the number 

Rules/Questions:
- The result does not include the number provided
- The result will be all multiples of 3&5 below the number argument

Examples:

solution(15) 
[3,6,9,12,14,5,10]

Data structure: Arrays and Strings

What do I have to do?
I have to find all the multiples of 3 and 5 
I then have to add all the numbers of those multiples

Algorithm:
  - declare the function solution with one parameter
    - declare a variable multiples which will have the multiples of 3 and 5
    - declare a for loop that will start ad 0 and while the index is less than the argument add 1
      - if the index is a multiple of 3 === 0 add the multiple add the index to the multiples variable
      - if the index is a multiple of 5 === 0 add the multiple add the index to the multiples variable // test here
      - return result with the reduce method 
*/

function solution(number) {
  let multiples = [];

  if (number <= 0) {
    return 0;
  }

  for (let index = 1; index < number; index++) {
    if (index % 3 === 0 || index % 5 == 0) {
      multiples.push(index);
    }
  }
  return Number(multiples.reduce((num1, num2) => num1 + num2));
}

console.log(solution(10));
console.log(solution(-1));