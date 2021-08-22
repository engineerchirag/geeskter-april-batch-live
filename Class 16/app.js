const http = require('http');
const server = require('./routes')
server.listen(3000, ()=> {
  console.log("Running at 127.0.0.1:3000")
})

