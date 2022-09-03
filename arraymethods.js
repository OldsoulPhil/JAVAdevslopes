var numbers = [2, 5, 6, 1];

//array = numbers
//method = .filter
//function gets a callback of n(paramater)
// (function(n, i) n = value: number, index: number, array: number[])
var filtered = numbers.filter(function(n, i) {
  console.log(i);
  return n >= 5;
});


console.log(filtered);

************************************************************

var classRoom = {
 grade: '3rd Grade',
 students: [
   { name: 'James', score: 90 },
   { name: 'Jenny', score: 92 },
   { name: 'Jacob', score: 87 },
   { name: 'Kate', score: 78 },
  ]
}


var gradeAStudents = classRoom.students.filter(function(student) {
  return student.score >= 90;
});

console.log(gradeAStudents);

***************************************************************
  
var numbers = [2, 5, 6, 1];
// a = 0, c = 2 => a = 2
// a = 2, c = 5 => a = 7
// a = 7, c = 7 => a = 14
// a 14, c = 1 => a = 15

// a = 2, c = 5 => a = 7
// a = 7, c = 7 => a = 14
// a 14, c = 1 => a = 15
var sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
  // we can omitt the , 0
  // should get 15 still
}/*, 0*/);

console.log(sum);

/*var sum = 0;
for(var n of numbers) {
  sum +=n;
};

console.log(sum);*/

******************************************************************

var classRoom = {
 grade: '3rd Grade',
 students: [
   { name: 'James', score: 90 },
   { name: 'Jenny', score: 92 },
   { name: 'Jacob', score: 87 },
   { name: 'Kate', score: 78 },
  ]
};
  
var scoreTotal = classRoom.student.reduce(function(acc, val) {
  retun acc + val.score;
}, 0);
  
classRoom.studentAverage = scoreTotal / classRoom.students.length;

console.log(classRoom);

*******************************************************************
// Array Map method
// Allows us to loop through an array and then do something with each item in that array
var numbers = [2, 5, 7, 1];

var classRoom = {
 grade: '3rd Grade',
 students: [
   { name: 'James', score: 90 },
   { name: 'Jenny', score: 92 },
   { name: 'Jacob', score: 87 },
   { name: 'Kate', score: 78 },
  ]
};

var helloStudents = classRoom.students.map(function(student, i, array) {
  /*console.log(i);*/
  console.log(array);
  return 'Index ${i}: Hello ${student.name} '; /*student.name*/
})
                                           
console.log(helloStudents);

**********************************************************************
// Chaining methods together to use them all inconjunction
  
var classRoom = {
 grade: '3rd Grade',
 students: [
   { name: 'James', score: 90 },
   { name: 'Jenny', score: 92 },
   { name: 'Jacob', score: 87 },
   { name: 'Kate', score: 78 },
  ]
};

var starStudents = classRoom.students
  .filter(function(student) {
    return students.score >= 80;
  })
  .map(function(value) {
    value.score += 5;
    return value;
  })
  .reduce(function(acc, val, index, array) {
    const total = acc.sum + val.score;
    return {
      sum: total,
      arr: array,
    };
    // the 0 always tells this where to start
  }, {sum: 0, arr: []});

  var studentAverage = starStudents.sum / starStudents.arr.length;

console.log(starStudents, studentAverage);
