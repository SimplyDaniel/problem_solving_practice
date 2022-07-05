/*
P: Write a function that takes an array with string
if the "wolf" is at the end of the string the world is about to eat you
else if the "wolf" is in the queue. 

Input: An array of string

Output: String

Explicit Requirements:

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
          5         4       3         2       1 

Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Implicit Requirements:

E:

D:

A:

SET the warnTheSheep function with an array parameter

  FOR LOOP iterate through the array argument
  SET the index variable = array.length - 1; index > 0; index -= 1;
    IF the array[array.length -1] === 'wolf
    CONSOLE.LOG string
  ELSE IF (array[index] === 'wolf')
    CONSOLE.LOG `string ${array[index + 1]}
  END
*/

function warnTheSheep(array) {
  let positon = array.reverse().indexOf('wolf');

  for (let index = array.length - 1; index >= 0; index -= 1) {
    let lastIndex =  array[array.length - 1]
    console.log(lastIndex);

    if (lastIndex === 0) {
      return `Please go away and stop eating my sheep`;
    } else {
      return `Oi! Sheep number ${positon + 1} you are about to eaten by a wolf!`
    }
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));