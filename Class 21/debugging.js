// console.log("hey")
// console.error(new Error("error"))
// console.group(["hey","hi"])
// console.info("Warning: ")
// console.warn("Warning")
// console.table([{a:1, b:2}, {a:2, c:3}])
// logfiles
// datewise
// Logfile110920211330.txt
// payments - statuses 
// create a payment -> pg giving 500 -> sending trigger/alert ->

// "Request recieved as :: " + req.url+" :: at "+Date.now()+"from user: "+res.session.name
// pg failed + Date.now()

// class Exception {
// }

// class DivideByZero Exception {

// }

// class ServiceError {
//   ServiceError(err) {
//     let error = err
//   }
//   getError() {
//     return error
//   }
// }
// pg failed ->
// new ServiceError("")
// Exception::ServiceError("")


// debugger
// byebug
// debugger

const express = require('express')
const { get } = require('../Class 19/ecommerce/routes')
const app = express()
app.listen(3000, ()=>{
  console.log("Listening to 3000")
})

app.get('/', (req,res) => {
  debugger;
  console.log("Hi") 
  console.log("Hi1") 
  console.log("Hi2")
  console.log("Hi3")

  res.send("hey")
})

// pvt application -> 1000 -> 1000 make the payment
// performance of api
// latency when interacting with third party

// 1. console 
// 2. debugger(cmd + ide)
// 3. inspect
// 4. postman
// 5. apm
// 6. flame graphs
// 7. memory leaks

// 100 customers -> 500 requests at any moment -> 1000 -> guest login ->10000
// /items get -> (500 * 20 * 2mb(img, details) + constant )
// 500 call stacks
// event loops(500)
// 1gb ram -> 500 + 5 + 506 + 750 + 250
// 64gb  -> 0.5gb

// 2000....10000000000
// postgres -> data ->