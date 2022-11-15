// What can I learn from the problem?
/*
Problem:Write a function that takes a positive number and returns the next
bigger number formed by the same digits 

Input: A positive int 
Output: the next biggest positive int using the same numbers 

Rules/Questions: 
- if no bigger number can be used return -1 

Examples:
12 ==> 21
13 14 15 16v 17 18 19 20 21
513 ===> 531
[5, 1, 3] // slice [1,3] reverse => [3, 1] ==> index 0 concat 
0   1   2
2017 ===> 2071
---
9 ==> -1
111 ==> -1
531 ==> -1

Data structure: Arrays

What do I have to do?
- I know I have to find the next biggest number using the same digits 

Algorithm:
  - declare the function nextBiggerNum
  - if the num argument is <= 10 return -1
    - declare a variable that will convert the number into a string and then we will convert it to an array // test here
    - declare a variable reverseNum which will be initialized to the last two elements reversed 
    - let final array be initialized to array index 0 concat reverse num
    - use the map function to convert the string to numbers 
      - if the array > number argument return the number 
      - else 
      - return -1 
*/  

function nextBiggerNum(number) {
  if (number <= 10)  return -1;
  let stringNum = String(number).split('');
  let reverseNum = stringNum.slice(-2).reverse();
  let length = stringNum.length - 2;

  if (stringNum.length < 3) {
    return reverseNum.join('') * 1;
  }
  let final = stringNum.slice(0, length).concat(reverseNum).join('') * 1;

  if (final > number) {
    return final;
  } else {
    return - 1;
  }
  return final > number ? true : -1;
}

console.log(nextBiggerNum(9) === -1) // true
console.log(nextBiggerNum(12) === 21); // true 
console.log(nextBiggerNum(513)=== 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1) // true
console.log(nextBiggerNum(531) === -1) //true
console.log(nextBiggerNum(713) === 731) //true
console.log(nextBiggerNum (123456789) === 123456798); // true