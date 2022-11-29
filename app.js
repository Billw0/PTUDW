const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/home')
const shopRouter = require('./routes/shop');
const cartRouter = require('./routes/cart');
const checkRouter = require('./routes/checkout');
const productRouter = require('./routes/products');
const app = express();

// view engine setup

app.set('view engine', 'hbs');

const viewspath = path.join(__dirname, 'views')
app.set("views",viewspath);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index',indexRouter);
app.use('/shop',shopRouter);
app.use('/cart',cartRouter);
app.use('/checkout',checkRouter);
app.use('/product',productRouter)
// catch 404 and forward to error handler
app.use(function(req,
                 res,
                 next) {
  next(createError(404));
});

// error handler
app.use(function(err,
                 req,
                 res,
                 next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
