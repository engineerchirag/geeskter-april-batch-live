var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// products, price, category, ratings, price
// getAllProducts, getProduct, updateProduct, addProduct, deleteProduct
// orders -> getAllOrders(user specific), getOneOrder(userid, orderid), updateOrder
// cart -> createCart, updateCart

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongo = require('./database-connection/mongo-connect')

const products = require('./products/products')

// mongo.connectToMongo((err) => {
//   if(err) { console.log(err) }
  // const orders = require('./orders/orders')
  // const carts = require('./carts/carts')
  // console.log(success)
  app.listen(3000, ()=>{
    console.log("Listening to port 3000")
  })
  // console.log("connected to db")
  app.use('/products', products)
// })


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
