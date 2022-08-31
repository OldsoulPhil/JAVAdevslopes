var rs = require ('readline-sync');

const operations = ['+', '-', '*', '/'];

const getOperation = () => {
  return rs.question('What operation would you like to perform? ', {
    limit: operations,
    limitMessage: 'This is not a valid operation!'
  });
}

function getNumber(type) {
  return rs.question(`What is the ${type} number you would like to use? `, {
    limitMessage: 'This doesn\'t look like a number!'
  });
}

fnuction calculation(operation, num1, num2) {
  if (operation === '+') {
    return num1 + num2;
  } else if (operation === '-') {
    return num1 - num2;
  } else if (operation === '*') {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

const operation = getOperation();
const num1 = getNumber('first');
const num2 = getNumber('second');

console.log('The result is: ' + calculation(operation, num1, num2));

