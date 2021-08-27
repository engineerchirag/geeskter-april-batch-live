const http = require('http')
const url = require('url')
const querystring = require('querystring')
const movies = require('./moviesController')
const bookings = require('./bookingsController')


module.exports = http.createServer((req, res) => {

  var reqUrl = req.url
  console.log(reqUrl.split("?")[0])
  console.log(req.method)

  if(req.method == 'GET' && reqUrl.split("?")[0] == '/movies') {
    movies.getShowsFromMovieId(req, res)
  } else if(req.method == 'POST' && reqUrl == '/booking') {
    bookings.bookSeats(req, res)
  }
})


// http requests - GET, post(body, param, form, etc), put, delete(id), option..
// /movies?movie_id=12