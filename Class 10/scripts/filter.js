/*
    filter returns values if conditions are satisfied
    It returns us new array with filtered items
*/

// let array = [1, 2, 3, 4, 5];

// let result = array.filter((x) => {
//   if (x > 3) {
//     return x;
//   }
// });

let array = [
  {
    name: "John",
    isPassed: true,
  },
  {
    name: "Jane",
    isPassed: false,
  },
  {
    name: "David",
    isPassed: true,
  },
  {
    name: "Modi",
    isPassed: false,
  },
];

let result = array.filter((x) => {
  if (x.isPassed === true) {
    return x
  }
});

console.log(result);
