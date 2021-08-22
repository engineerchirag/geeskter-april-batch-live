const http = require('http')
const url = require('url')

module.exports = http.createServer((req, res) => {
  var userC = require('./controller.js')
  const reqUrl = req.url
  console.log(reqUrl)
  console.log(reqUrl == '/users/:id')


  if(reqUrl == "/users" && req.method == "GET") {
    console.log("GEt request")
    userC.getUsers(req, res)
  } else if (reqUrl == '/users' && req.method == "POST") {
    console.log("Creating USer")
    userC.createUser(req, res)
  } else if(reqUrl == '/users' && req.method == 'PUT') {
    console.log("Updating user")
    userC.updateUser(req, res)
  } else {
    res.statusCode = 404
    res.setHeader = ('Content-Type', 'Application/json')
    res.end()
  }
})


// http requests - GET, post(body, param, form, etc), put, delete(id), option..
