// JavaScript Strings
// a string has a number of characters in a string
var make = 'Toyota';
var model = "Prius";
var year = 2021;

console.log(make.length);

// better practice to use ''
// if you use one always use that version

    //string concatenation
//ability to join or add strings together

var myRide = make + model;

console.log(myRide);

//produces a single line no space concatenation

var myRide = make + ' ' + model;
console.log(myRide);

//this will try to always convert this to a string
var myBraggingRight = 'I drive a ' + year + ' ' + myRide;
console.log(myBraggingRight);

                                //String Methods and Properties
//Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
/*But with JavaScript, methods and properties are also available to primitive values, 
because JavaScript treats primitive values as objects when executing methods and properties.*/

// length property returns the length of a string
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

                              //Extracting String Parts
// slice(start, end)
//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: the start position, and the end position (end not included).
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

// substring(start, end)
//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().

// substr(start, length)
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.

// replace()
//The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", W3Schools");
// Note The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//The replace() method replaces only the first match
//If you want to replace all matches, use a regular expression with the /g flag set.

// toUpperCase();
// A string is converted to upper case
                           
// toLowerCase();
// A string is converted to lower case
                           
// concat()
// joins two or more strings

// trim()
// method removes whitespace from both sides of a string
                           
//ECMAScript 2019 added the String method trimStart() to JavaScript.
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.






