function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;
  return function() {
    // console.log("index before the increment: ", index);
    var roll = list[index];
    index++;
    // console.log("index after the increment: ", index);
    return roll;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log("1st time rolled: ", rollLoadedDie());  // 5
console.log("2nd time rolled: ", rollLoadedDie());  // 4
console.log("3rd time rolled: ", rollLoadedDie());  // 6

// var rollLoadedDie2 = makeLoadedDie();
// console.log('1st time, second variable', rollLoadedDie2());
