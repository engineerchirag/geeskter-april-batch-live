let {movies, theatres, halls, shows, bookings, payments} = require('./data.js')
const url = require('url')
const querystring = require('querystring')

exports.bookSeats = (req, res) => {
  // seats , showId,  -> calculate price -> mark the seats as unavailable

  let body = ''
  req.on('data', (chunk)=>{
    body += chunk
    console.log("ch"+chunk.toString())
  })

  req.on('end', () => {
    let req_body = JSON.parse(body)
    if (req_body['seats'] == [] || req_body['showId'] == '') {
      // send 404 
    } else { 
      let seats = req_body['seats']
      let total_price = 0
      for(let i in shows) {
        for (let s in seats) {
          let curr_seat = seats[s]
          let hall_id = shows[i]['hallId'] - 1
          let hall = halls[hall_id]

          if(hall['seats_available'].includes(curr_seat)) {
            for (let s in hall['seats']) {

              if(hall['seats'][s].hasOwnProperty(curr_seat)) {
                total_price += hall['seats'][s][curr_seat]
                hall['seats_available'] = hall['seats_available'].toString().split(','+curr_seat+',').join()
                hall['seats_booked'] = hall['seats_booked'].push(curr_seat)
              }
            }
          }
        }
      }
      var response = {
        data: {"price": total_price},
        message: "Seats are booked"
      }
    }
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'Application/json')
    res.end(JSON.stringify(response))
  })
  
}
