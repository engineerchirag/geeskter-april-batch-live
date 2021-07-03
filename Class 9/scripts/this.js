/*
    The JavaScript this keyword refers to the object it belongs to.
    Alone, this refers to the global object.
    In a method, this refers to the owner object.
    In a function, this refers to the global object.
*/


var z = 12
console.log(this.z)

const person = {
    fname: "John",
    lname: "Doe",
    id: 123,
    familyDetails: {
        motherName: "Tina",
        fatherName: "David",
    },
    fullName: function() {
        console.log(this.fname, this.lname)
    }

}
person.fullName()

const person1 = {
    fname: "John",
    lname: "Doe",
    id: 123,
    city: ["Mumbai", "Banglore"],
    fullName() {
        this.city.forEach(function(c) {
            console.log(this.fname, c)
        }, this)
    }

}
person1.fullName()
