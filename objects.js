// JavaScript Objects

// allows us to store complex data with different propeties and methods

// Object
var person1 = {
  // Properties
  firstName: 'Bob',
  lastName: 'Holla',
  age: 25,
  hobbies: ['skate', 'code'],
  face: {
    eyeColor: 'blue',
    glasses: false,
  },
  greeting: function() {
    // this keyword refers to the object it belongs to. here its in the function so it belongs to the person global object
    return 'My name is ' + this.firstName + ' and I\'m ' + this.age + ' years old.';
}

// allows acess to object which is "person" and its properties which is "firstName"
/*console.log(person);
console.log(person.greeting()); function
console.log(person.face.eyeColor); object properties and arrays
console.log(person.firstName);
console.log(person['lastName']);*/
  
var person2 = new Object();
var person3 = {};

// give person3 properties
person3.name = 'Jose';
person3.age = 34;
person3.greeting = function() {
  return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.';
}

// Object Constructor
// name and age are parameters
// parameters have to match

// This creates an object constructor and now we have a function that creates an object that is dynamic and reusable

function Person(name, age) {
  // this keyword  
  this.name = name;
  this.age = age;
  this.greeting = function() {
    return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.';
  }
}

// created an array and placed each person in the array
var humans = [];

humans.push((new Person('James', 24)););
humans.push((new Person('Julie', 18)););
humans.push((new Person('Jackson', 99)););
humans.push((new Person('Jared', 56)););

// for loop to print out the greeting of each person
for (var i = 0; i < humans.length; i ++) {
  var human = humans[1];
  console.log(human.greeting());
}

console.log(humans);
console.log(new Person('Julie', 44));
/*console.log(person2);
console.log(person3);
console.log(person2.name);
console.log(person3.name);*/
**************************************************************************************
