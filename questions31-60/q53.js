// What can I learn from the problem?
/*
Problem: I have to write a function that validates the pin argument 

Input: String of digits 
Output: a boolean true if the string is 4 or 6 digits false otherwise 

Rules/Questions:
- The function should return false if

Examples:

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Data structure: Strings

What do I have to do?

Algorithm:
  - START
    - SET Declare the function that accepts a string argument 
    - SET declare a variable that is initialized to a regex variable
    - SET declare the for loop 
    - IF if the string argument length is does not equal 4 or 6 return false
      - iterate through the string and if the char is not a vaible regex return false
      - else continue
    - return true
*/

function validatePin(pin) {
  let valid = /^(\d{4}|\d{6})$/;

  if (valid.test(pin)) {
    return true;
  } else {
    return false;
  }
}


console.log(validatePin('1234')) // true
console.log(validatePin('123456')) // true
console.log(validatePin('1234xz')) // false
console.log(validatePin('123zz')) // false