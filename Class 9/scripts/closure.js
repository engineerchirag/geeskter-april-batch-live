/*
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
    state (the lexical environment).
    In other words, a closure gives you access to an outer function's scope from an inner function.
    In Javascript, closures are created every time a function is created, at function creation time.
*/

function x() {
    var variable = 10
    function y() {
        console.log(variable)
        return variable
    }
    return y
}
var z = x()
z()

function makeAdder(x) {
    function addAnother(y) {
        return x + y
    }
    return addAnother
}
var add5 = makeAdder(5)
console.log(add5(2))