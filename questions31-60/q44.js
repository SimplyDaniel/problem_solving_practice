// What can I learn from the problem?
/*
Problem:

You are given an array of words, where each words consists of
lowercase English letters.

In one operation, select any two adjacent words (words[i - 1]
and words[i]) that are anagrams of each other,
and delete words[i] from words.
Keep performing this operation as long as you can select an index
that satisfies the conditions.

NOTE: a valid index is such that 0 < i < words.length

Return words after performing all operations.
It can be shown that selecting the indices for each operation in
any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the
letters of a different word or phrase using all the original
letters exactly once. For example, "dacb" is an anagram of "abdc".


Example 1:

Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array is by using
the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
 Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
 Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
 Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] is the final answer.

Example 2:

Input: words = ["a","b","c","d","e"]
Output: ["a","b","c","d","e"]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.

Input: An array of words 
Output: an array of all the duplicate arrays removed 

Rules/Questions:
- remove all anagrams until you cant anymore 

Examples:

remove_anagrams(["bat","tab","all","tea","eat"]) == ["bat","all","tea"]
remove_anagrams(['a','b','c','d','e']) == ['a','b','c','d','e']
remove_anagrams(["dog", "god"]) == ["dog"]
remove_anagrams(["abba","baba","bbaa","cd","cd"]) == ["abba","cd"]
remove_anagrams(["day","tina", "anit","house","note", "tone"]) == ["day,"tina","house","note"];

Data structure: Arrays 

What do I have to do?
- I have to compare the indexes of each index and then check if it includes the word 

Algorithm:
  - declare the function remove_anagram
    - declare a result variable initialized to an empty array
    - iterate through the array with a loop
*/

function remove_anagrams(array) {

  const myArrayWithNoDuplicates = array.reduce(
    (previousValue, currentValue, currentIndex) => {
      if (!previousValue.includes(currentIndex)) {
        console.log(previousValue + 1)
        return [...previousValue, currentValue];
      }
      return previousValue;
    },
    [],
  );
  console.log(myArrayWithNoDuplicates)
}

console.log(remove_anagrams(["bat","tab","all","tea","eat"])) // == ["bat","all","tea"]
