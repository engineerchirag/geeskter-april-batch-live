let drivers = []
let rides = []
let bookings = []

fs.readFile('./db/drivers.js', (err, data) => {
  if(err) {
    console.log("Unable to access drivers data")
  } else {
    drivers = JSON.parse(data)
  }
})
fs.readFile('./db/rides.js', (err, data) => {
  if(err) {
    console.log("Unable to open file rides.js")
  } else {
    rides = JSON.parse(data)
  }
})
fs.readFile('./db/bookings.js', (err, data) => {
  if(err) {
    console.log("Unable to open file bookings.js")
  } else {
    bookings = JSON.parse(data)
  }
})

module.exports = (booking_id) => {
  let ride_details = null
  for(let d in drivers) {
    if (drivers[d]['status'] == 'available') {// || (drivers[d]['end_time'] - Time.now <= 120 && drivers[d]['status'] == 'in-ride'))
      drivers[d]['status'] = 'unavailable'
      updateDrivers(drivers)
      ride_details = createRide(booking_id, drivers[d].id)
      break
     //here was issue, we were returning temp, undefined
    } else {
      // handle case when no driver available
    }
  }
  return ride_details
}

function createRide(booking_id, driver_id) {
  let ride_index = (rides.length == 0)? (1): (rides[rides.length - 1].id + 1)
  console.log("index", ride_index)
  let ride_details = {
    "id": ride_index, 
    "booking_id":booking_id,
    "driver_id":driver_id,
    "status":"created"
  }
  rides.push(ride_details)
  markBookingAsAssigned(booking_id)
  fs.writeFile('./db/rides.js', JSON.stringify(rides), (err, data) => {
    if(err) {
      console.log("err")
      return null
    } else {
      console.log("ride created"+JSON.stringify(ride_details))
    }
  })
  return ride_details
}

function updateDrivers(drivers) {
  fs.writeFile('./db/drivers.js', JSON.stringify(drivers), (err, data) =>{
    if(err) {
      console.log("Unable to update drivers")
    } else {
      console.log("Driver marked as unavailable")
    }
  })
}
 
function markBookingAsAssigned(booking_id) {
  let booking = null
  for(let b in bookings) {
    if(bookings[b]['id'] == parseInt(booking_id)) {
      booking = bookings[b]
      booking['status'] = 'assigned'
      bookings.push(booking)
    } else { 
      bookings.push(bookings[b])
    }
  }

  fs.writeFile('./db/drivers.js', JSON.stringify(bookings), (err, data) =>{
    if(err) {
      console.log("Unable to update drivers")
    } else {
      console.log("Driver marked as unavailable")
    }
  })
}
  // ride - (id, start_time, end_time, driver_id, end_location, start_location, 
  // ride_cost, booking_id, status(created, started, ended))