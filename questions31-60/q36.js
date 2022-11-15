// What can I learn from the problem?
/*
Problem: Write a function that returns the product of five
consecutive digits in a string argument

Input: string of numbers
Output: number of 5 consecutive digits

Rules/Questions:
- what constitutes as five digits?

Examples:

greatestProduct("123834539327238239583") // should return 3240
12383
45393
27238
23958

39583 == the last five digit 
Data structure:

What do I have to do?
- I have th find the largest sum of those digits of fie consecutive digits 
  - I could find all the substrings within the string of digits 
- How do i get just five digits? 

Algorithm:
  - Declare the function greatestProduct(digits) with one parameter
    - declare a variable that will have all the substrings in an array
    - declare a endIdx variable that will increment after each iteration
      this will be the 5th index, then the 6th and so on...
    - declare a for loop 
      - at each iteration push the substring from idx to endIdx // test here
    - declare a variable that will have all the totals of the strings in an array 
    - declare a for loop that will be the length of the array
      - declare an inner for loop that will add the sum of each index
    - declare a sortedArray with the sort method 
    - return the last element
*/

function greatestProduct(digits) {
  let substrings = [];
  let endIdx = 4;
  for (let index = 0; index < digits.length; index++) {
    endIdx += 1;
    substrings.push(digits.substring(index, endIdx));
  }
  let totals = [];
  // iterate through the substrings
  for (let idx = 0; idx < substrings.length; idx++) {
    let num1 = substrings[idx];
    let numArray = num1.split('');
    if (numArray.length <= 4) {
      continue;
    } else {
      totals.push(numArray.reduce((num1, num2) => num1 * num2));
    }
  }
  return Math.max(...totals);
}

console.log(greatestProduct("123834539327238239583")) // should return 3240
console.log(greatestProduct("92494737828244222221111111532909999")) // should return 5292
console.log(greatestProduct("02494037820244202221011110532909999")) // should return 0