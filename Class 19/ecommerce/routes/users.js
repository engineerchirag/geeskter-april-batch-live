var express = require('express');
var router = express.Router();
var fs = require('fs')
var Joi = require('joi')
var cors = require('cors')

var users = []
fs.readFile('./models/users.js', (err, data) => {
  if(err) {
    console.error("Error"+err)
  } else {
    users.push(JSON.parse(data))
  }
})


/* GET users listing. */
router.get('/', cors({methods:'POST', origin:''}), function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) { 
  // {"user": {"username":"kanikadawar5", "password":"asdfgh@123456"}}
  if (req.body.hasOwnProperty('user')) {
    const {error, result} = userSchema.validate(req.body.user)
    if (error) {
      console.error(error)
      res.send(JSON.stringify({"error":error['details'][0]["message"]}))
    } else {
      users.push(req.body.user)
      // updateUserData(users)
      res.send(JSON.stringify({"response": users}))
    }
  } else { 
    console.log("Bad Request!")
    res.sendStatus(404)
  }
})


const userSchema = Joi.object({
  username: Joi.string().alphanum().max(15).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z]{1}[a-zA-Z0-9@_]{1,18}$")).required()
})

module.exports = router;
