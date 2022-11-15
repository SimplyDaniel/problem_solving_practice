// What can I learn from the problem?
/*
Problem: given an array of strings write a function that returns the common char
that appears in all the strings within the array (including duplicates)

Input:
Output:

Rules/Questions:

Examples:
for examples if a char occurs 3 times is all the strings but not 4 time you need to
include that in your final result.

console.log(commonChars(['a']));
console.log(commonChars());
console.log(commonChars());
console.log(commonChars());
console.log(commonChars());
Data structure:

What do I have to do?

Algorithm:
  - declare the function that accepts one parameter 
    - declare an array that will have the common chars in every char
    - split the first index of the array of strings into an array
    -  
*/

function commonChars(array) {
  let result = [];
  let firstIdx = array[0].split('');

  firstIdx.forEach((letter) => {
    if (array.every(item => item.includes(letter))) {
      result.push(letter);
      array.map(char => char.replace(letter, ''));
    }
  })
  console.log(result);
}

console.log(commonChars(['a', 'b']));
console.log(commonChars(['ab', 'bc'])); // b 
console.log(commonChars(['bella', 'label', 'roller']));//  [e, l, l] 2 l's because l appears twice in the string 
console.log(commonChars(['cool', 'lock', 'cook'])); // c, o
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // 'o'
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); []