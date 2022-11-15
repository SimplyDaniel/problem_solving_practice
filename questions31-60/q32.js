// What can I learn from the problem?
/*
Problem: Write a function that test wether the inout string is a Pangram

Input: String of letters
Output: Boolean value True if the string is pangram false otherwise

Rules/Questions: 
- Case is irrelevant
  - the input can be lowercased and capital
  - 

Examples:

isPangram("The quick brown fox jumps over the lazy dog.") ===> True
isPangram('Daniel, is learning to be a programmer') ===> False

Data structure:
I am thinking we can use an object or array 

What do I have to do?
- I have to test the input string and determine if each letter shows up once or more
- I could use an object that will hardcode the alphabet and everything the loop encounters a letter it increments
  the key
  - if the iteration is a number or add to disregard or continue
- I could then iterate of the object and if the value of each other is greater than 0 return true else false 
- could also do two helper functions that test wether the char is lower case or uppercase 

Algorithm:
  - declare the function isPangram()
    - declare a variable that will lowercase the input argument
    - declare an object that will have the alphabet 
    - iterate through the string 
      - if the index is equal to the key in the object 
        - increment the value of the current iteration // TEST HERE 
      - Else if the current iteration is not in the key
        - continue
      - iterate through the object values 
        - and if the current value if greater than 0
          - continue
        - else true false
      - return true 
*/

function isPangram(string) {
  let lowercaseString = string.toLowerCase();
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
  for (let [key, value] in obj) {
    for (const char of lowercaseString) {
      if (char === key) {
        obj[key] += 1;
      }
    }
  }

  let values = Object.values(obj);

  for (let value of values) {
    if (value <= 0) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // ===> True
console.log(isPangram('Daniel, is learning to be a programmer')) // ===> False
