const http = require('http');
const server = require('./routes')
server.listen(4000, ()=> {
  console.log("Running at 127.0.0.1:4000")
})

