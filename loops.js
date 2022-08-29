// JavaScript loops
// loops will run same code over and over with a different value which you will usually use with arrays

var tvShows = [
  'The Walking Dead',
  'Breaking Bad',
  'The Office',
]

var userSavedMovies = [];

// array of objects
var toDos = [
  { title: 'item 1', completed: true },
  { title: 'item 2', completed: false },
  { title: 'item 3', completed: false },
  { title: 'item 4', completed: true },
];

for (var x = 0; x < toDos.length; x++) {
  if (toDos[x].completed) {
    completedItems.push(toDos[x]);
  }
}
// for loop that will loops through the array above
// create a comparison statement that will sift through the completed items and find true and push them into a new array

console.log(toDos);
console.log(completedItems);

// for loop
// initiate a for loop
// created variable i, keeps track of iterations of itself.
// which then leads to a comparison
// if it comes out as true you add i + 1
for (var i = 0; i < tvShows.length; i++) {
  console.log(i);
}

// The result maths out like this
// 0 < 3 = true; 0 + 1 = 1
// 1 < 3 = true; 1 + 1 = 2
// 2 < 3 = true; 2 + 1 = 3
// 3 < 3 = false; the for loop stops

// we have set a limit, be careful not to make it an infinite loop.
// this will never end and you will have to exit out of the program.
//for (var i = 1; i > 0; i++) {
//  console.log(tvShows[i]);
//}

// While loop, while loop will keep iterating while a condition is true.

var bottles = 99;
while (bottles > 0) {
  if (bottles != 1) {
  console.log(bottles + ' bottles of stuff on the wall');
  } else {
    console.log(bottles + ' bottle of stuff on the wall');
  }
  bottles -= 1;
}














