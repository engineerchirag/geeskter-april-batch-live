function fn1(value) {
    let variable = "Car"
    return value * 2
}

let square = fn1(2)
console.log(square)
console.log(variable) // Error variable not accesscible due to scope


