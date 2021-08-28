const express = require('express')
const app = express()
const port = process.env.PORT
const fs = require('fs')
let drivers = []
fs.readFile('./data.js', (err, data) => {
  if(err) {
    console.log("Unable to open file data.js")
  } else {
    drivers = JSON.parse(data)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`running at ${port}`)
})

app.use((req, res, next) => {
  console.log("Request recieved as :: " + req.url+" :: at "+Date.now())
  next()
})

app.use(express.json())

app.get('/', (req,res,next) => {
  console.log("inside home")
  res.write("Response")
  res.end()
})

app.get('/drivers', (req, res) => {
  res.write(JSON.stringify(drivers))
  res.end()
})

app.post('/drivers', (req, res) => {
  var driver = req.body
  let index = drivers[drivers.length-1]['id'] + 1
  driver['id'] = index
  drivers.push(driver)

  fs.writeFile('./data.js', JSON.stringify(drivers),(err, data) => {
    if(err) {
      res.write("Unable to register driver")
    } else {
      res.write("Driver registered with id "+ index)
    }
    res.end()
  })
})

app.put('/drivers', (req, res) => {
  let driver_id = req.query.id
  let new_driver_details = req.body.driver
  
  drivers[driver_id - 1] = new_driver_details
  fs.writeFile('./data.js', JSON.stringify(drivers),(err, data) => {
    if(err) {
      res.write("Unable to update driver")
    } else {
      res.write("Driver updated successfully" + JSON.stringify(drivers[driver_id - 1]))
    }
    res.end()
  })
})

app.delete('/drivers', (req, res) => {
  let driver_id = req.query.id
  let updated_drivers = []
  for (let d  in drivers){
    console.log(typeof(driver_id))
    if (d+1 != parseInt(driver_id)) {
      updated_drivers.push(drivers[d])
    }
  }
  fs.writeFile('./data.js', JSON.stringify(updated_drivers),(err, data) => {
    if(err) {
      res.write("Unable to delete the driver")
    } else {
      res.write("Driver deleted successfully" + JSON.stringify(drivers[driver_id - 1]))
    }
    res.end()
  })
})

