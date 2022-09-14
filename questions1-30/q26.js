/*

Highest scoring word - https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

P: I need to return the highest scoring word based on the letter of the alphabet
I need to return the highest letter as a string. 

Input: A string of words
Output: the highest scoring word within the string input argument 

Rules/Questions:

- Return the highest word as a string
- Do we need to use chatCodeAt()? 
- If two scores are the same, return the first word that appears

E:
let scoreAlphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

high('man i need a taxi up to ubud'), 'taxi');
man = 13 + 1 + 14; = 28
i = 9 
need = 14 + 5 + 5 + 4 = 28
a = 1
taxi = 20 + 1 + 24 + 9 = 54
up = 21 + 16 = 37
to = 20 +15 = 35
ubub = 21 + 2 + 21 + 4 = 48

D: Objects and Arrays

A:

Pseudocode:
  - I have to add all the scores per the letter, how?
    - Iterate through the string and add them to a variable
  - Compare the letter in the string with the letter in the obj key
    - How?
  - I have to split the string into separate substrings
    - How?
  - I then have to see which number was the largest and then return the string, how?
  - 

Algo:

- Create the scoreAlphabet object that will have all the scores per letter 
  - Declare the function high() with one parameter
    - declare a subStrings variable and initialize it to an empty array 
    - FOR LOOP set the index to one at each iteration  push the current iteration to the array variable 
*/

let scoreAlphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function high(string) {
  let stringArr = string.split(' ');
  let subStrings = [];
  for (let index = 1; index < string.length; index++) {
    subStrings.push(stringArr.substring(0, index));
  }

  console.log(stringArr)
}

high('man i need a taxi up to ubud');