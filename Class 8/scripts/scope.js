/*
    Scope determines the accessibility (visibility of varaibles).
    Javascript has three types of scope:
        1. Block scope
        2. Function scope
        3. Global scope
        4. Automatically global
*/

// Global Scope
var x = 45;
var y = "John";

// Automatic global
myFunction();
function myFunction() {
  carName = "Vovlo";
}
console.log(carName);

// Functional scope
function myFunctionScope() {
  let carName = "Volvo";
}
console.log(carName); // Error

// Block scope
var val = 23;
if (val === 23) {
  let newVal = 123;
  console.log(newVal);
}
console.log(newVal); // Error
