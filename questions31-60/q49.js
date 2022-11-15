// What can I learn from the problem?
/*
Problem:

Write a function that takes a string as an argument and
returns the character that occurs least often in the
given string. If there are multiple characters with the
same lowest number of occurrences, then return the one
that appears first in the string. When counting
characters, consider uppercase and lowercase versions to
be the same.



The tests above should each log "true".

Input: String
Output: the char that occours least and first within the string 

Rules/Questions:
- we have to return the char that appears the least 
  - but it also has to appear first if there are multiple chars with the same amount
- consider upper and lower the same 

Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

Data structure: Object to count the amount of times a char appears  

What do I have to do?

Algorithm:
  - declare the function 
    - declare a variable that will have the string argument lowercased 
    - declare an object that will count the occurrences
    - iterate through the string variable 
      - at each iteration create the key in the object and then increment
    - iterate through the object 
*/

function leastCommonChar(string) {
  let lowercaseStr = string.toLowerCase();
  let obj = {};

  for (let char of lowercaseStr) {
    if (!obj[char]) {
      obj[char] = 0
    }
    obj[char] += 1
  }

  for (let key in obj) {
    let value = obj[key];
    if (value <= 1) {
      return key;
    }
  }
  for (const key in obj) {
    let val = obj[key];
    if (val > 1) {
      return key;
    }
  }
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// console.log(leastCommonChar("Hello World"));
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers"));
// console.log(leastCommonChar("Mississippi"));
// console.log(leastCommonChar("Happy birthday!"));
console.log(leastCommonChar("aaaaaAAAA"));