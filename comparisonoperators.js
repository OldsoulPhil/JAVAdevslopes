// JavaScript Comparison Operators


// == equal to
// == compares the values
// (1 == '1') works but is bad
// strict comparison === cheacks the value and the type

// != not equal to
// !==
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

if (1 > 3) {
  console.log(' Holy Smokes it\'s true!!');
}

// Example
var currentAccountBalance = 74.99;
var purchase = 74.99;

if (purchase <= currentAccountBalance) {
  console.log('Lava Lamps for days....');
} else {
  console.log('You broke bruh!...');
}

// but if you use < as the comparison the code might not work.

// to add more comparisons add else if (){}

var currentAccountBalance = 74.99;
var purchase = 74.99;
var freeLavaLampVoucher = true;

if (purchase <= currentAccountBalance) {
  console.log('Lava Lamps for days....');
} else if (freeLavaLampVoucher) {
  console.log('Free stuff rocks!!');
} else {
  console.log('You broke bruh!...');
}

// do not do to many as it will be messy and there is probably a better way you will learn ahead.
