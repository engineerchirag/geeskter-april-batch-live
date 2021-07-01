// Problem 1
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// Problem 2
function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
alert(foo());

// Problem 3
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent());

// Problem 4
alert(foo());
function foo() {
  var bar = function () {
    return 3;
  };
  return bar();
  var bar = function () {
    return 8;
  };
}

// Problem 5
var myVar = "foo";
(function () {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();
