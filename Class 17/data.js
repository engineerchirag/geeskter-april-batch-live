var movies = [{
  id: 1,
  name: "Shershah",
  cast_and_crew: "kiara, siddharth",
  running_length: 2.5,
  type: 'patriotic',
  languages: ['english', 'hindi']
}]

var theatres = [{
  id: 1,
  zone: "Karol Bagh",
  latitude: 11.987656,
  longitude: 11.345678987,
  name: "Purana Theatre"
}]

var halls = [{
  id: 1,
  theatre_id: 1,
  seats: [{"A1": 150}, {"A2":200}, {"A3":180}, {"A5":190}, {"B1":200},{"B2":245}],
  seats_available: ["A1","A2","A3","A4"],
  seats_booked: ["B1", "B2"],
  name: 'A1'
}]

var shows = [{
  movieId: 1,
  startTime: "2019-08-26T12:30:00.000Z",
  hallId:1
}]

var bookings = [{
  id: 1,
  seats: ["B1", "B2"],
  created_at: new Date("27.08.2021 12:00")
}]

var payments = [{
  id: 1,
  booking_id: 1,
  amount: 450,
  payment_gateway: "bhim",
  pg_id: "BHIM00001",
  status: "success"
}]

module.exports = {movies, theatres, halls, shows, bookings, payments}
// movies
// halls
// shows
// bookings
// theatres
// payments

// selectMoviesFromTheatre
// selectMoviesFromMovieId
// selectMoviesFromArea
// seatBooking
{/* <bookSeat>
<makePayment> 
<verifySeat> */}