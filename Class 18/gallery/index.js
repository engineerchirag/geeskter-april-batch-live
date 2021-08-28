const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('images'))

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})


// <req> ->middleware-> routes -> controller -> <res>
// middleware
// header - code: 1254

// Cab booking service
// Driver application -> registered, accept ride, cancel ride, start ride, finish ride
// User application ->  register, book a ride, cancel ride, rate a ride