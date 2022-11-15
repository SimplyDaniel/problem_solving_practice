// What can I learn from the problem?
/*
Problem: Write a function that will count the number of duplicate
cases and numbers in a string. The function does not care about case insensitive.


Input: String 
Output: Number the count of duplicates 

Rules/Questions:
- The function does not care about case B and b will count once 
- Only count the duplicates once, example: 'indivisibility' count 1 even though i occurs 6 times
- Do I count spaces? example: 'Hello world, how are you?' there would be 4 spaces should i count it once?

Examples:

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times

Data structure: Arrays and Maybe objects

What do I have to do?
- I have to count the number of duplicates
- if index === index + 1 

Algorithm:
  - declare the function with one parameter
    - declare a variable that will have the argument lowercased
    - declare an empty object that will have the alphabet
    - declare a loop that will iterate through the lowercased sting argument
      - if the idx does not exist in the object 
        - initialize it and set the value to 0
        - increment the index for every occurrence
    - create a variable that will have the values of the object 
    - declare a count variable and initialize it to 0 
    - iterate through the values if the value >= 2 // this would mean the letter occurs twice 
      - add to the count
    
*/

function duplicateCount(text) {
  let lowercase = text.toLowerCase();
  let occurrences = {};

  for (let idx = 0; idx < lowercase.length; idx++) {
    let char = lowercase[idx];

    if (!occurrences[char]) {
      occurrences[char] = 0
    }
    occurrences[char] += 1
  }

  let values = Object.values(occurrences);
  let count = 0;

  for (let idx of values) {
    if (idx >= 2) {
      count += 1; 
    }
  }
  return count;
}

duplicateCount("aabBcde") // 2 'a' occurs twice and 'b' twice (`b` and `B`)
duplicateCount('aA11'); //2  'a' and '1'

