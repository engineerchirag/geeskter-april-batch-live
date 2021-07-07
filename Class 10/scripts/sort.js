/*
    sort helps in sorting items in array in asc / desc
    For sorting numbers use callback, else for sorting
    array of strings we can directly use sort method
*/

let array = [5, 10, 3, 4, 5];

let sortedArray = JSON.parse(JSON.stringify(array)).sort((a, b) => {
  return b - a;
});

console.log(sortedArray);
