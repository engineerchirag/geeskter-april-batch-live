const { response } = require('express')
const express = require('express')
const app = express()
const fs = require('fs')
app.set('view engine', 'pug')

app.listen(3000, () => {
  console.log("App running at http://127.0.0.1:3000")
})

app.get('/', (req, res) => {
  res.send("Hello People!!")
})

app.get('/html', (req, res) => {
  res.writeHead(200,{'Content-Type':'text/html'})
  res.end("<div><p>Hey There</p></div>")
})

app.get('/fs', (req, res) => {
  fs.readFile('./views/index.html', null, (err, data) => {
    if(err) {
      res.writeHead(404)
      res.write("File not found!")
    } else {
      res.write(data);
    }
    res.end("<div>Ending!</div>")
  })
})

app.get('/pug/:title/:body', (req, res) => {
  res.render('index', req.params)
  res.end()
})

app.get('/download', (req, res) => {
  res.download('/Users/kanikadawar5/geeskter-april-batch-live/Class 18/static/pug.jpg')
})
// user_type = 'doctor/patient'
app.get('/cookies/:age', (req, res) =>{
  let name = req.query.name
  res.cookie('name', name)
  res.cookie('age',req.params.age)
  res.write("Cookies set")
  res.end()
})

app.get('/removeCookies', (req, res) => {
  res.clearCookie('name')
  res.write('Cookies removed')
  res.end()
})
// templates
// id card
// fullname
// dob
// <html format>
// <html>
// <pdf>

// APIs -> client -> server(endpoints)
// SOAP ->tightly coupled, -> states ->  vs REST
// loosely coupled -> authentication, payment, adding to_card ->RESTful
// REST -> ..//
// REST methods - GEt, put, post, put, option