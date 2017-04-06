var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj){
  var squareNum1 = obj.x * obj.x;
  var squareNum2 = obj.y * obj.y;
  var total = squareNum1 + squareNum2;
  var squareRootOfTotal = Math.sqrt(total);
  return squareRootOfTotal;
});

console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
