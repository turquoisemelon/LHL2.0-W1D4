// var wrapLog = function (callback, name) {
//   return function() {
//     return `${name}(${arguments[0]},${arguments[1]}) : ${callback(arguments[0], arguments[1])}`
//   }
// };

var wrapLog = function (callback, name) {
  return function() {
    return `${name}(${arguments[0]},${arguments[1]}) : ${callback.apply(null, arguments)}`
  }
};

// Create a function called wrapLog() that takes in a function (callback)
// and a string (name) and returns a function that does
// the same thing as callback but also logs the name, input parameters,
// and return value of the callback function:

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

console.log(logSum(5,3)); // sum(5,3) => 8
console.log(logSum(3,2)); // sum(3,2) => 5

var multiply = function (a,b) {return a * b;};
var logMultiply = wrapLog(multiply, "multiply");

console.log(logMultiply(5,3));  //multiply(5,3) : 15
console.log(logMultiply(3,2));  //multiply(3,2) : 6
