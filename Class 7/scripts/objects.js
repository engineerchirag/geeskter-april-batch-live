let obj = {
  name: "John",
  age: 23,
  citiesVisited: ["Mumbai", "Banglore"],
  familyDetails: {
    motherName: "Jenny",
    fatherName: "David",
  },
};

console.log(obj["name"]);

for (let key in obj) {
  console.log(obj[key]);
}
