// JavaScript Functions
// function is a block of code that has been designed to perform a calculation or task
// can be excuted when something calls it
// name convention

function calcArea(w, l) {
  // code that will be executed
  // w and l are parameters as a place holder
  // in the function they are arguments
  return w * l;
}

//variables that will hold the value of the area
var kitchenArea = calcArea(15, 18);
var bedroomArea = calcArea(12, 10;

console.log(kitchenArea);
console.log(bedroomAear);

//we are human we make mistakes so a function will help combat human error.

function toCelsius(f) {
  //algorythm
  var temp = (5/9) * (f - 31);
  // return the number as a string
  return temp.toFixed(2);
}

//var cel = toCelsius(46);
// changing it to this will allow not to have the other variable
var weather = 'The temperature outside is ' + toCelsius(46) + ' celsius!';

console.log(cel);
console.log(weather);

// can also use a function to update something

var warrior = {
  name: 'Super Tuffy';
  attack: 70;
  defence: 55;
  mana: 100
}

function levelUp(prop, val) {
  // prop += val
  // warrior.attack makes it dynamic
  // working with an object
  // warrior.prop would create a new property
  // warrior['attack']
  warrior[prop] += val;
}

levelUp('attack', 2);
levelUp('defence', 8);
levelUp('mana', 17);
//warrior.attack += 2;
//warrior.defence += 6;
//warrior.mana += 12;

console.log(warrior);
