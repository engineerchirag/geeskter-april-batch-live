/*
    Curring is technique of evaluating functions
    with multiple arguments, into single arguments
*/

// (
//     function(a,b,c) {
//         console.log(a+b+c)
//     }
// )(1,2,3)

// var add = function(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

var add = (a) => (b) => (c) => a + b + c
console.log(add(4)(5)(6))