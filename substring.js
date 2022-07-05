/*
P: Write a function that accepts two arguments. A string arg and a searchtext arg
The function will return a number based on the amount of times the 

Input: Two string arguments 
Output: number 

Explicit Requirements:

- The function has to return the Searchtext argument 

Implicit Requirements:

- What should I return if the string is an epty string?

E:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice

D:

A:

SET the solution function with two parameters
  SET the fullText Chars vairbale with special charaters replaced.
  SET the count = 0;

  FOR LOOP iterate throught the fulltextchars var
  IF filltextchars includes search text
  ADD to count varible
RETURN count 
*/

function solution(fullText, searchtext) {
  let regex = new RegExp(searchtext, 'g');
  let count = fullText.match(regex).length;
  return count;
}

solution('aa_bb_cc_dd_bb_e', 'bb');
solution('aaabbbcccc', 'bbb');
