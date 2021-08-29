const express = require('express')
const app = express()
const port = process.env.PORT
module.exports = fs = require('fs')
const find_ride = require('./commonFunction')

let drivers = []
let bookings = []
let rides = []

fs.readFile('./db/drivers.js', (err, data) => {
  if(err) {
    console.log("Unable to open file data.js")
  } else {
    drivers = JSON.parse(data)
  }
})
fs.readFile('./db/bookings.js', (err, data) => {
  if(err) {
    console.log("Unable to open file booking.js")
  } else {
    bookings = JSON.parse(data)
  }
})
fs.readFile('./db/rides.js', (err, data) => {
  if(err) {
    console.log("Unable to open file rides.js")
  } else {
    rides = JSON.parse(data)
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

app.post('/bookings', (req, res) =>{ 
  let current_booking = req.body.booking
  let booking_details = bookings
  let booking_index = (bookings.length == 0)? 1: (bookings[bookings.length - 1].id + 1)
  current_booking['id'] = booking_index

  booking_details.push(current_booking)

  fs.writeFile('./db/bookings.js', JSON.stringify(booking_details), (err1, data1) => {
    if (err1) {
      let response = {
        "message": "Error created booking. Please try again later"
      }
      res.write(response)
      console.log("Unable to create bookings data file")
    } else {
      let response = {
        "data": booking_details, 
        "message": "Successfully created booking"
      }
      res.write(JSON.stringify(response))
    }
  })
})

app.get('/bookings', (req, res) => {
  let booking_id = parseInt(req.query.id)

  let response = {}
  for (let b in bookings) {
    if (bookings[b]['id'] == booking_id) {
      let ride = find_ride(booking_id)

      if(ride) {
        response = {
          "message": "Driver assigned successfully", 
          "data": ride
        }
        res.write(JSON.stringify(response))
      } else {
        response = {
          "message": "Unable to create ride"
        }
        res.write(JSON.stringify(response))
      }
    } else {
      response = {
        "message" : "Invalid booking id"
      }
    }
  }
  response = {
    "message": "No bookings at present"
  }
  res.end()
})

app.put('/rides', (req, res) => {
  let ride_id = parseInt(req.query.id)
  let updated_drivers = []
  let updated_rides = []

  let response = {
    "message": "Success"
  }
  res.write("")

  for (let r in rides) {
    let ride = rides[r]

    if(ride_id == ride.id) {
      let driver = null
      ride.status = 'started'
      ride['start_time'] = Date.now
      updated_rides.push(ride)
    
      for(let d in drivers) {
        if(drivers[d]['id'] == ride['driver_id']) {
          driver = drivers[d]
          drivers[d].status = 'in-ride'
          updated_drivers.push(drivers[d])
        } else {
          updated_drivers.push(drivers[d])
        }
        updateDrivers(updated_drivers)
      }
      response.message = "Ride Started successfully"
      response.data = {ride:ride, driver:driver}
      res.write(JSON.stringify(response))
    } else {
      updated_rides.push(ride)
      response.message = "Ride not found. PLease check the ride id"
      res.write(JSON.stringify(response))
    }
  }
  updateRide(updated_rides)
  res.end()
})

function updateDrivers(updated_drivers) {
  fs.writeFile('./db/drivers.js', JSON.stringify(updated_drivers), (err, data) => {
    if(err) {
      console.error("Error updating drivers")
    } else { 
      console.log("Drivers updated successfully")
    }
  })
}

function updateRide(updated_rided) {
  fs.writeFile('./db/rides.js', JSON.stringify(updated_rided), (err, data) => {
    if(err) {
      console.log("err")
      return null
    } else {
      console.log("ride updated"+JSON.stringify(updated_rided))
    }
  })
}