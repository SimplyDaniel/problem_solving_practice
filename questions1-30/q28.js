// What can I learn from the problem?
/*
P: Write a function that returns the number of times teh search text is found within the string
The function will accept two arguments a 'string' and a searchText

Input: String and the search text to be found within the text 
Output: Number the amount of times we can see the search text 

Rules/Questions:

E:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice

D: Strings and Regex?

A:

What do I have to do?
- I think I can use regex in this situation 
  - Can I use a variable within regex?
- Return the count amount 
- I could also iterate through the string 
Algo:
  - declare the function solution with two arguments 
    - declare a variable 'result' and initialize it to a 0
    - declare a new string variable initialized to an empty string;
    - declare a variable regex 
    - iterate through the new string and if the string matches the search text add to count 
    - return count 
*/

function solution(string, searchText) {
  let count = 0;
  let regex = new RegExp('[^' + searchText +']', 'g');
  let newString = string.replace(regex, ' ');
  let stringSplit = newString.split(' ');
  
  for (let char of stringSplit) {
    if (char === searchText) {
      count += 1;
    }
  }
  console.log(count);
}

solution('aa_bb_cc_dd_bb_e', 'bb');// 2
solution('aaabbbcccc', 'bbb') ; // 1