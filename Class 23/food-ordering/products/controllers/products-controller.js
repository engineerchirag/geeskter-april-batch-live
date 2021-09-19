// const db = require('./../../database-connection/mongo-connect').db()

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.aubc2.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


exports.getProducts = (req, res) => {
  client.connect(err => {
    const db = client.db("april-geekster")
        // perform actions on the collection object 
    db.collection('products').find({}).toArray((err, result) =>{
      if(err) {
        console.log(err)
        res.sendStatus(201)
      } else {
        res.send({status:200, result: result, message: "Products fetched successfully"})
      }
    })
    // client.close();
    });
}

exports.createProduct = (req, res) => {
  var product = req.body.product
  db.collection('products').insertOne(product, (err, result) =>{
    if(err) {
      console.log(err)
      res.sendStatus(201)
    } else {
      console.log(result)
      // client.close()
      res.send({status:200, result: result.count, message: "Product created successfully"})
    }
  })
}
