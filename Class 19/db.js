const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'db'
})

connection.connect()

// console.log(connection)
connection.query('select * from demo_tables;', (err, data) => {
  if(err) {
    console.error(err)
  } else {
    console.log("The result rows are as - " + JSON.stringify(data))
  }
})

connection.end()
// create table