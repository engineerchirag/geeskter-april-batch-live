const { application } = require("express")
const { emit } = require("../Class 19/ecommerce/app")

// Error handling
function divide(num, den) {
  if (den == 0) {
    // throw "Divide by zero error"
    throw new Error("Divide by zero error")
  } else {
    return num / den
  }
}
// console.log(1/0)
num = 5
den = 0


// application level errors

// try catch -sync
// try {
//   console.log(divide(num,den))
// } catch (error) {
//   console.error("e"+error.message)
// }

// promises -> 
// divide(num,den).then((result)=>{
//   console.log("567890"+result)
// }).catch((e) => {
//   console.error("****"+e)
// })

// async -> callback
// fs.readFile('filenam', (err, data) => {
//   if(err) {
//     console.error("messg" + err.message)
//   } else {

//   }
// })

// event.on((err, data) => {
//   emit(data)
//   emit(err)

// })

try {

} catch(err) {

}

// name, function/file/explain -> trail, 
// book my show (aws), pg(azure)-> validations-middleware, code exceptions/ errors, database related(gcp),
// list shows ->requst(FE -> retry-twice, thrice) -> application -> db(gcp ->corrupted)-> table does not exist/-> return user -> FE()
//  -> lock -> 
//  service -> 4 nodes - db  -> 1 one correct, rest not yet synced


// postgres db
// transaction -> lock ->
// db.connection
// db.close()

// book my show  - > pg is down -> 500
retry = 0 
errorcode = 500
while(retry < 3 && errorcode == 500) {
  debugger;
  // debit_amount_from_pg(amount)
  retry += 1
}
// email_to_Devs('this pg givig 500')
// error tracker -> error calls 
// return "Service not available please try after sometime"
// // 10000 -> 
console.table([1, 2,3])



// logging -> logfile
// errors 
// alerts -> 3rd party connection failure 
// aws -> ur application crashed, how would u come to know?


