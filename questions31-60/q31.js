// What can I learn from the problem?
/*
P: Write a function that takes a string argument and returns the minimum substring
that can be repeated maximums times the length of the string 

Input: String of characters 
Output: An array with the minimum substring and the count 

Rules/Questions:
- Find the minimum substring 
- How many times can the minimum substring be repeated for the length of the input argument
- basically the minimum substring has to equal the input argument 

E:

s = "ababab"; ===> ["ab", 3]

s = "abcde"; ===> ["abcde", 1]
- based on this example a substring for the question is a string with non repeated chars

D:

s = "ababab"; ===> ["ab", 3]
substrings ==> a, ab, aba, abab, ababa, ababab;

A:

What do I have to do?
- I have to get all the substrings of the input argument 
- I have to return the amount of times(count) the minimum substring is equal to the input argument 
- I have to compare the lengths with the minium string length 
- I know I have to compare the shortest length substring 

Algo:
  - declare the function with one input argument 
    - declare a variable that will return the result array
    - declare a variable that will return the amount of times the minimum substring is used to created the same input string
      - aka what substring is equal to the input argument
    - declare a variable that will have all of the substrings
    - declare a for loop that will iterate through the substrings
      - declare a count variable 
      - declare a result variable 
      - while the result length is less than string length 
        - we are going to increment minimum substring to result
        - and increase the the count variable 
      - if the result variable does not equal the string variable
        - we are going to continue
      - else if the string does equal 
        - return the minimumSubstring index and the count amount
*/

function repeatedSubstrings(string) {
  let substring = [];

  for (let idx = 1; idx <= string.length; idx++) {
    substring.push(string.substring(0, idx));
  }

  for (let index = 0; index <= substring.length - 1; index++) {
    let count = 0;
    let minimumSubstring = substring[index];
    let result = [];
    while (result.length <= string.length - 1) {
      result += minimumSubstring;
      count++
  }
    if (result !== string) {
      continue;
    } else {
      return [minimumSubstring, count];
    }
  }
}

console.log(repeatedSubstrings('ababab'));
console.log(repeatedSubstrings('deeedeee'));
