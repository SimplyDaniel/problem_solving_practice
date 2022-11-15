// What can I learn from the problem?
/*
P: I have to count the time a character appears in a string

Input: String
Output: object with the letter as the key and the count amount as the instance 

Rules/Questions:
-

E:

letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

D:

What do I have to do?

Algo:
  - declare the function letter_count with one parameter 
    - declare a variable result and initialize it to an empty object 
    - declare a variable count and initialize it to the variable 0
    - iterate through the string argument with a loop
      - declare an if statement
        - if the object[index] does not exists
          - we are going to initialize it after each iteration
            - obj[index] = 0
            obj[index] ++
*/

function letter_count(string) {
  let object = {};
  for (const char of string) {
    if (!object[char]) {
      object[char] = 0;
    }
    object[char] += 1;
  }
  return object;
}

console.log(letter_count('arithmetics'))  //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}