/*
    every retruns true if all conditions in array 
    are satisfied else it retruns false
*/

let array = [1, 2, 3, 4, 5, 6, -12];

let result = array.every((x) => x < 10 && x < -1);

console.log(result);
