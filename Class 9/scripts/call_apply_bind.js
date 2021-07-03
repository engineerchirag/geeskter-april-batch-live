/*
    The call() method calls a function with a given this value 
    and arguments provided individually.
    This is called as function borrowing.

    apply() method is similar to call(), but instead of accepting parameters individually
    it accepts array of parameters

    bind() method is also similar to call(), but this time it will return a copy of function,
    and is used to invoke at later stage
*/

function fullName(country, state) {
  console.log(
    `Name is ${this.fname} ${this.lname}. Lives in ${country},${state}`
  );
}

const firstObj = {
  fname: "John",
  lname: "Doe",
  id: 123,
};

const secondObj = {
  fname: "Jane",
  lname: "Doe",
  id: 123,
};

fullName.call(secondObj, "India", "Maharastra");

fullName.apply(firstObj, ["India", "Maharastra"]);

const copyFullName = fullName.bind(secondObj, "India", "Maharastra");
copyFullName()


