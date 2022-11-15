// The tests above should print "true".
// What can I learn from the problem?
/*
Problem:
Write a function named toWeirdCase that accepts a string,
and returns the same sequence of characters with every
4th character in every second word converted to
uppercase. Other characters should remain the same.

Input: A string 
Output: the same string with every second word c4th char converted to uppercase

Rules/Questions:
- Every second word 4th char has to be converted to uppercase
- If the words have less than 4 chars continue 

Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
  ['Lorem', 'IpsUm', 'is', 'simPly', 'dummy', 'texT', 'of', 'the', 'printing', 'worLd']);
   0          1        2      3         4         5     6     7       8           9
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
        ['It', 'is', 'a', 'lonG', 'established', 'facT', 'that', 'a', 'reader', 'wilL', 'be', 'disTracTed']);

          0     1     2     3           4           5       6      7    8         9       10      11
console.log(toWeirdCase('aaA bB c') === ['aaA', 'bB', 'c']);
                                          0       1     2
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              ['Miss', 'MarY', 'Poppins', 'worD', 'is', 'supErcaLifrAgilIstiCexpIaliDociOus']);
                0       1         2         3       4       5
Data structure:

What do I have to do?
- based off the test cases I can use every other odd word to capitalize the 4th letter of the chars
- I have t0 access the inter chars of the longer string 
- 

Algorithm:

*/
