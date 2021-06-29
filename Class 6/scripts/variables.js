/*
1. let
2. var
3. const
*/

let nameUsingLet = "John.";
nameUsingLet = "Jane";
console.log(nameUsingLet);

var nameUsingVar = "Dave";
nameUsingVar = "Noddy";
console.log(nameUsingVar);

const nameUsingConst = "Robert";
nameUsingConst = "Henry"; // Error cannot update constant
console.log(nameUsingConst);
