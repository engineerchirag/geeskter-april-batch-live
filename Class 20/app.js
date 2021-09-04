// <username, password>
// secret
// register -> username, password, copypassword  -> hash(pwd)  ->  token(string )
// login/ booking->(token) -> (secret, password) -> hash  -> 401
// (pwd)
var users = [{
  username: "kanikadawar5",
  password: "pwd@123"
}]
var salts = [{
  username: "kanikadawar5",
  salt: "salt123"
}]
const express = require('express')
const app = express()
const bp = require('body-parser')
const jwt = require('jsonwebtoken')
var secret = "tokengenerationlocalsecret"

app.listen(3000, ()=> {
  console.log("Listening to 3000")
})

app.use(bp.urlencoded({extended: true}))
const crypto = require('crypto')
const bcrypt = require('bcrypt')

function hashPasswordUsingCrypto(password) {
  const sha256 = crypto.createHash('sha256')
  const hashedPwd = sha256.update(password).digest('base64')
  return hashedPwd
}

function hashPasswordUsingBcrypt(username, password) {
  var enc_salt = bcrypt.genSaltSync(10)   //10 is the rounds of enc we want to add in generation of our salt
  salts.push({username:username, salt: enc_salt})
  return bcrypt.hashSync(password, enc_salt)
}

function verifyPassword(password, salt) {
  return bcrypt.hashSync(password, salt)
}


function generateToken(request_body) {
  return jwt.sign(request_body, secret)
}

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization

  console.log("Hey")
  if(authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, secret, (err, data) => {
      if(err) {
        console.error(err)
        res.sendStatus(403)
      } else {
        console.log("token verified"+JSON.stringify(data))
        req.username = data.username
        next()
      }
    })
  } else {
    res.sendStatus(401)
  }
  
}


app.post('/register', (req, res) => {
  // var password = hashPasswordUsingCrypto(req.body.password)
  var username = req.body.username
  var password = hashPasswordUsingBcrypt(username, req.body.password)
  var user = {"username": username, 'password': password}
  users.push(user)

  console.log(users)
  res.send(JSON.stringify({"message": "User registered successfully", "data":user}))
})

app.post('/login', (req, res) => {
  var username = req.body.username
  var salt = ''
  var user = users.find(u => (username == u.username))
  for (let s in salts) {
    if (salts[s].username == username) {
      salt = salts[s].salt
    }
  }

  // enc_pwd = verifyPassword(req.body.password, salt)
  var token = generateToken({username: username})

  if (user) { // && enc_pwd == user.password) {
    res.send(JSON.stringify({message: "User logged in successfully!", token:token}))
  } else {
    res.sendStatus(401)
  }
})

app.get('/', authenticateJWT, (req, res)=>{
  console.log("route")
  var username = req.username
  var user = {}
  for (let u in users) {
    if(users[u].username == username) {
      user = users[u]
    }
  }
  // var user = users.find(u => {username == u.username})
  // var body = req.body
})


// sh256(pwd)
// sha256(sha256(pwd) + salt)
// shan(sham(pwd) + hashPassword(Salt))