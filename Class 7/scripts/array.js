let array = [1, 2, 3, 4, 5];
let array1 = [12, 13, 14];
let array2 = [1221, 123];

let emptyArray = [];
emptyArray.length = 6; // Gives array length of 6 with values as undefined

array.push(6); // Adds or appends element in array
console.log(`Array after pushing an item ${array}`);

let popedElement = array.pop(); // Return last element poped from array
console.log(`Poped element is ${popedElement}`);
console.log(`Array after poping an item ${array}`);

array.shift(); // Shifts the array from 0th index i.e deletes element at first position
console.log(`Array after shifting an item ${array}`);

delete array[0]; // Deletes item but length of array remains same. The value at deleted position is undefined
console.log(array.length);

array.unshift(10); // Prepends new element at beigening of array by shifting other elements
console.log(`Array after unshifting an item ${array}`);

array.splice(1, 0, "Lemon", "Apple"); // Adds new elements at provided location and also helps in deleting items at given index without creating undefined values

let array3 = array.concat(array1, array2); // Mergres given arrays

console.log(Array.isArray(array)); // Helps in checking whether given dataType is array
