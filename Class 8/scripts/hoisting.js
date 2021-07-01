/*
    In Javascript, a variable can be used before it is declared and this called process is called hoisting.
    Javascript only hoist delearations not initializations.
    It only works with var. Initializations using let and const results in reference error.
    Functions can also be hoisted.
*/

x = 5
console.log(x);
var x;

y = 5;
console.log(y);
let y;


var z = 10;

firstFunc();
secondFunc();
// thirdFunction(); // Error as it's stored as undefined in memory at time of allocation
// forthFunction(); // Error as it's stored as undefined in memory at time of allocation
// console.log(thirdFunction); // undefined
// console.log(forthFunction); // undefined

function firstFunc() {
  var z = 13;
  console.log(z);
}

function secondFunc() {
  var z = 13;
  console.log(z);
}

var thirdFunction = () => {
  var x = 23;
  console.log(x);
};

var forthFunction = function () {
  var x = 23;
  console.log(x);
};

console.log(z);

