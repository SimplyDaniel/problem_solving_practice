/*
problem: https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

P: Write a function that takes a string argument and retuns an
Object with the count of each letter and how many they occur

Input: String 
Output: An object with the count of each letter

Explicit Requirements:
- Return an object 

Implicit Requirements:

E:

D: Object and Strings

A:

FUNCTION create the letterCount() funciton
  LET create a varibale and assign it to an empty object
  
  FOR OF Loop to iterate through the string
    IF The variable does not exsist create the variable
    Then Increment the count

  RETURN the empty object
*/

function letterCount(string) {
  let obj = {};

  for (const character of string) {
  if (!obj[character]) {
    obj[character] = 0
  }
  obj[character]++;
  }
  return obj;
}

console.log(letterCount('arithmetics'));

//=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}