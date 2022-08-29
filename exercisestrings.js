///Create a series of variables that represent a driver's license or passport.  You might include properties such as:

//dateOfBirth
//age
//isOrganDonor
//streetAddress
//city
//state
//zip / postal code
//idNumber
//etc

//After you have created the properties, create a string variable that contains all of the data from the other variables/constants and then print it into a single readable sentence.

//The final output might look similar to this:  "Hi, my name is Jill and I was born on 12/20/80 and I live at 224 Worthington drive and my id number is..." etc etc

//Be sure to include all of the properties.

var dateOfBirth = 'Feb 11, 1995';
var age = 30;
var isOrganDonor = true;
var streetAddress = '3511 Lake Park Lane';
var city = 'Kearny';
var state = 'CA'
var zip = 68901;
var idNumber = 678901;

var sentence = 'Hi, my name is Brenen and I was born on ' + dateOfBirth + ' and I am ' + age + ' ' + 'years old.' + ' I live on ' + streetAddress + 'in' + ' ' + city + ' ' + state + ' ' + zip + '.';

console.log(sentence);







