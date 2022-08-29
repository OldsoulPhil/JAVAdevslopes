/* Consider this scenario: You have a shopping cart with 6 items in it.  
The total price of all the items combined is $78.50 You have a coupon that gets you 25% off of the total price. 
After the coupon is applied, taxes will be applied at a rate of 7.75% of the total cost (cost after coupon).

Create 6 different variables that represent the price of each item
Perform addition operations to get the total price of all 6 items and store it in a variable ($78.50)
Create a variable for the 25% coupon
Create a variable called priceAfterDiscount and store the total price after the 25% discount has been applied (should equal around $58.87)
Create a variable called taxes that stores the total taxes to be charged using the tax rate (should equal around $4.56)
Create a variable called finalPrice that applies the 7.75% tax rate to priceAfterDicscount.  (should equal around $63.43) */

var applePrice = 6.18;
var orangePrice = 6.18;
var milkPrice = 3.69;
var controlerPrice = 45.00;
var coffeePrice = 12.00;
var creamerPrice = 5.45;

var couponPrice = 25e-2;
var taxRate = 0.0775;

var totalPrice = applePrice + orangePrice + milkPrice + controlerPrice + coffeePrice + creamerPrice;

var priceAfterDiscount = totalPrice - (totalPrice * couponPrice);

var taxes = priceAfterDiscount * taxRate;

var finalPrice = priceAfterDiscount + taxes;

console.log(finalPrice);
