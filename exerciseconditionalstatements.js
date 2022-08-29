//In this exercise you'll complete a series of "comparison" mini exercises. Conditional logic is a huge part of coding. It's what helps a program make decisions. Finish each exercise below.

//Exercise 1:
//Write a JavaScript program to get the difference between a given number and 27
//If the number is greater than 27 return double the absolute difference.
//Example:
//Given 42, the returned result would be 30. ( (42-27) * 2)

//Exercise 2:
//Write a JavaScript program to compute the sum of the two given integers.
//If the two values are same, then returns triple their sum.
//Example:
//Given 12 and 12, the result would be 72. ( 12 === 12 so (12 + 12) * 3 = 72)

//Exercise 3:
//Write a JavaScript program to check two given numbers and return true IF one of the number is 40 OR if their sum is 40. - else return false
//Example:
//Given 40 and 40 would return true (one or both numbers are 40)
//Given 20 and 20 would return true (the sum is equal to 40)
//Given 30 and 25 would return false (none of the numbers are 40 and the sum is not 40)
//Given 35 and 5 would return true (the sum is equal to 40)

// Exercise 1
var always = 27;
var random = 100;

if (always > random) {
  console.log(random - always)
} else {
  console.log((random - always) * 2)
};

// Exercise 2
var always = 25;
var random = 25;

if (always === random) {
  console.log((always + random) * 3)
} else {
  console.log(always + random)
}

// Exercise 3
var always = 110;
var random = 40;

if (always + random === 40) {
  console.log(true)
} else if (always === 40) {
  console.log(true)
} else if (random === 40) {
  console.log(true)
} else {
  console.log(false)
};
