const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kanikadawar5:12345@cluster0.aubc2.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db;

// var connectToMongo = (callback) => {
//   client.connect(err => {
//     db = client.db('april-geekster')
//     if(err) {
//       console.log("Error"+err)
//     }
//     console.log("Connected to mongo")
//     return callback;
//   });
// }

// var db = () =>{
//   return db
// }

// module.exports = {connectToMongo, db}
