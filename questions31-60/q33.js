// What can I learn from the problem?
/*
Problem: Write a function that takes two string arguments,
the function will return true if the str1 argument letters can be
rearranged to match the string2 argument.

Input: Two string arguments
Output: true if string 1 letters can be rearranged to match string2

Rules/Questions:
- Does it have to match completely? Because we are returning a boolean value
- Can the str1 just match the chars in str2 meaning if it includes it it can equal a match
- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered

Examples:

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

Data structure: I think an object and arrays will work to solve this problem

What do I have to do?:
- I have to see if the str1 includes letters from string2
  - If it does that means it can be rearranged to make the str2 word

Algorithm:
  - declare the function with two parameters
    - create a variable that will have the alphabet as the key and value 0
    - iterate through the str2 argument
      - iterate though tke keys in the object
        - if the char of str2 is equal to key in object add a 1
    - 
*/
function scramble(str1, str2) {
  let obj = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0,
  }

  for (let letter of str1) {
    for (const key in obj) {
      if (letter === key) {
        obj[key] += 1;
      }
    }
  }

  let final = '';

  for (let prop in obj) {
    if (obj[prop] >= 1) {
      final += prop;
    }
  }

  // console.log(obj);

  for (let char of str2) {
    if (!final.includes(char)) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(scramble('rkqodlw', 'world')) // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // ==> True
console.log(scramble('katas', 'steak')) //  ==> False
