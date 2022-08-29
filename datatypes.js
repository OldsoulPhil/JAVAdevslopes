// JavaScript Data types

        /* Primitive / Value Types */

//string
//String is a series of characters in quotes
//String is anything in a text format in single or double quotes '' "".
var firstName = 'Mary';

//number
var age = 30;

//boolean
//true or false vaule
// when we need to get one of two anwsers for code.
var recedingHairLine = false;

//undefined
// no value or type
var favFood;

//null
//nothing
//can be reassigned to any value or type
// can reset the values
var toiletPaper = null;



                            /* Reference Types / Structural Types */
      /* Value that has more complex structure to it more than assigning a simple number */

//Objects
// {} is the syntax part
var person = {
  // firstName is a key
  // 'Mary' is the value
  // : is used rather than =
  firstName: 'Mary',
  age: 30,
  recedingHairLine: false,
  favFood,
  toiletPaper: 206,
}

//Arrays
// store a list of values
var students = ['Orion', 'Kingston', 'Shayla', 'Chloe'];

//Functions
var myFunc = function() {
  // run some code
}

// type check the variable with an operator of "typeof"
// can check the type of variable being passed in
console.log('Value: ', firstName);
console.log('Type: ', typeof firstName);


