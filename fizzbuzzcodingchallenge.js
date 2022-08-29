// FizzBuzz Coding Challenge

/*Coding Challenge
Write a short program that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */

for (var numbers = 1; numbers <= 100; numbers++) {
  str = (numbers % 5 == 0 && numbers % 3 == 0) ? 'FizzBuzz' :
    (numbers % 3 == 0 ? 'Fizz' :
      (numbers % 5 == 0) ? 'Buzz' : numbers);
  console.log(str);
}
