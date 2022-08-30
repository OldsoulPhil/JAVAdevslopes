// JavaScript Scope

// Scopes determines the accessability which is visibility of variables

// Global - A global variable has global scope;
// All scripts and functions on a web page can access it

//var name = 'Hentry';
// tood this out after adding bobby

var user1 = {
  // key value pairs
  name: 'Bobby',
  age: 25,
  data: 'all the important things',
}

//if (true) {
 // var name = 'Andrew';
//}

//console.log(name);
//the problem with gloabl variables it can be accessed by the window.
//window.name = 'Jose';
//console.log(window);

***************************************************************************
// Local - Variables declared within a function;
// become Local to the function.

/*function myFunc() {
  var name = 'Bella';
}

myFunc();
console.log(name);*/
  
function userBDay(age) {
  var newAge = age + 1;
  user1.age = newAge;
  console.log('Happy Birthday ' + user1.name + ' you are' + newAge + ' years old!');
}

userBday(user1.age);
console.log(user1);
// ES2015 / ES6
// Introduced 'let' & 'const';
// These two keywords provide block scope variable ( and constants) in JavaScript

// Variable declared inside a block () CANNOT be
// accessed from outside the block.

/* Block Scope with if conditional statment
 if something is true then excute code*/
/* if () {

}*/

//for loop
// loop through x amount of times and everything within {} will excute code
/*for () {
  
}*/

// let
// let keyword is similar to var except it provides a block scope. variables will be containted within

let x = 10;
if (true) {
  // could reassign it to be called
  // otherwise you have to console.log() in this block
  let x = 2;
}

console.log(x);

/*let x = 10;
if (true) {
 x = 2;
 if (true) {
  x = 'Hello';
  for (var i = 0; i < 4, i++) {
    x = i;
  }
 }
}

console.log(x);
console.log*(i);*/

// you get a reference error
// since i is in the for loop it cannot be accessed
// let does not let it get accessed either
/*let x = 10;
if (true) {
 x = 2;
 if (true) {
  x = 'Hello';
  for (let i = 0; i < 4, i++) {
    x = i;
  }
 }
}

console.log(x);
console.log*(i);*/

// const
// works in the opposite manner than let does
// const creates a variable that cannot be reassigned a new value

const animal = 'Racoon';
// cannot reassign the animal variable
//animal = 'Cat';
var namer;
console.log(animal);

// in const you cannot update the const but you can update object properties












