/*
P: Write a funcition that takes an integer argument in KM speed
and retunrs the speed in cm per second

Input: Integer speed in KM
Output: Number in speed cm 

Explicit Requirements:
- The function has to return the speec in CM per second 
- The number has to be floored

Implicit Requirements:

- What is the formula of KM to CM speed? 
- KM Per Hour is === 27.777778
CM per second === km per hour x 27.777778


E:

1.08 --> 30


D: Integers 

A:

- write the function cockroachSpeed(speed)
  - decalre and initalize a KM per hour variable
- RETURN speed input X km per hour 
*/

function cockroachSpeed(speed) {
  let kmHour = 27.777778;
  return Math.floor(speed * kmHour);
}

console.log(cockroachSpeed(1.08));