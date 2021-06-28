/* 
1. if else 
2. ternary 
3. switch
*/


let nameVariable = "John";
if (typeof(nameVariable) == "string") {
  console.log("It's string");
} 
else if (typeof(nameVariable) == "number") {
    console.log("It's number");
}
else {
  console.log("Cannot identify type.");
}


let numberVarible = 1
numberVarible > 12 ? console.log(true) : console.log(false)


let nameVariable1 = "John"
switch(nameVariable1){
    case "John":
        console.log("John is the name");
        break
    case "Jane":
        console.log("Jane is the name");
        break
    default:
        console.log("No name found");
}
