var words = ["ground", "control", "to", "major", "tom"];

var numbers = [1, 2, 3, 4]

function map(arr, callback) {
  var newArray = [];
  for(elem of words) {
    newArray.push(callback(elem));
  }
  return newArray;
};

var a = map(words, function(word) {
  return word.length;
});

console.log(a);

// Implement your own version of the built-in array map function.
//
// Yours will take in two arguments. The first will be an array to map
// and the second will be a callback function. The function will return
// a new array based on the results of the callback function.
