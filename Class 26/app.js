// console.log("Hey there")
// const fs = require("fs")

// fs.readFile('dummy1.txt', (err, data) => {
//   if (err) {
//     return console.error(err)
//   } 
//   console.log(data.toString())
// })


// console.log("Ended program")

// console.log(fs.readFileSync('dummy.txt').toString())
// console.log("Ended program1")

// OS module
// const os = require('os')
// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.type())
// console.log(os.arch())


// Path module

// const path = require("path")
// console.log(path.basename('Class5/dummoooy.txt'))
// console.log(path.basename('dummy.txt'))
// console.log(path.dirname('Class 6/html/Basic.html'))
// console.log(path.basename('Class 6/html/Basic.html'))
// console.log(path.basename(path.join('Class 6', 'html/Basic.html')))

//http module
// const http = require("http")

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type':'text/plain'
//   })
//   res.write('hey there!!')
//   res.end()
// }).listen(8000, ()=>{
//   console.log("Server running at http://localhost:8000")
// })

var logger = require('logger').createLogger(); // logs to STDOUT

console.log(logger)
// while(true)
// {
//   logger.warn("testing logger npm")
// }
logger.debug("Debug")
logger.info('loading an array', [1,2,3], 'now!');

// system design
// ecommerce
// arch nodejs
// nodejs
// modules inbuild(http, fs, path, os)
// npm
