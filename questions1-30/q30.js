// What can I learn from the problem?
/*
P:
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

solve("1357"),10)
1, 3, 5, 7, 13, 15, 17, 135, 357, 1357
1, 3, 5, 7, 13, 57, 35, 135, 357, 1357, 

Input: String
Output: Number

Rules/Questions:
- I have to return the number of odd-numbered substrings that can be formed
- What is an odd numbered substring?
  - its where the number within the substring is odd not the actual index
- Return the amount of the substrings

E:

D: Arrays 

A:

What do I have to do?
- I have to return the count amount 
- I have to get all the substrings that are withing the string argument 

Algo:
  - declare the function solve that accepts a string argument
    - declare a variable count and initialize it to 0
    - declare a variable substringsArray initialized to an empty array
     - iterate through the string argument with a loop
      - create a innerloop // test here 
*/


function solve(string) {
  let substringsArray = [];
  let count = 0;


  for (let index = 0; index < string.length; index++) {
    for (let innerIndex = index + 1; innerIndex <= string.length; innerIndex++) {
      substringsArray.push(string.substring(index, innerIndex));
    }
  }
  
  for (let i = 0; i < substringsArray.length; i++) {
    if (substringsArray[i] % 2 === 1) count ++;
  }
  return count;
}


console.log(solve("1341"));
// console.log(solve("1357"));