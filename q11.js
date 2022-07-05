/*

https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript - Valid Parentheses
P: Write a function that takes a string argument of parenthesis and retins true is the string is valid false otherwis

Input: string
Output: boolean 

Explicit Requirements:
- The function must return true is the parenthesis are valid ()
- return false otherwise 

Implicit Requirements:

E:

"()"              =>  true
")(( )))"          =>  false
)))) ((

D:

A:
- Write the validParentheses() function
  - declare a varible names 'completeParen' initalizde it to 0
  - Iterate through the string argument with a for of loop
    - IF the index === '(';
    - add 1 to 'completeParen'
    - else if index === ')'
    - Minus 1 from complete paren
  - retunn completeParen === 0 // should be = 0 if the amount of left parens ( are = to right parens )
*/

function validParentheses(string) {
  let completeParen = 0;

  for (let index of string) {
    if (index === '(') {
      completeParen += 1;
    } else if (index === ')') {
      completeParen -= 1;
    }
  }
  return completeParen === 0;
}

console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()())())"));
