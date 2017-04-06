var countdownGenerator = function (x) {
  return function() {
    if (x < 0) {
      return "Rockets already gone, bub!";
    } else if (x === 0) {
      return "Blast Off!";
    } else {
      x--;
      return `T-minus ${x + 1}...` ;
    }
  }
};

//
// Implement a function countdownGenerator() that takes
//  in a number x and returns a function that counts down
//  when it is called (see starter code below).


var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
