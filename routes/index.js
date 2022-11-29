var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('index', { title: 'Express' });
});

router.get('/product-details', function(req, res, next) {
  //throw new Error('Unknown error!');
  res.render('product-details', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('cart', { title: 'Express' });
});


router.get('/shop', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('shop', { title: 'Express' });
});

router.get('/checkout', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('checkout', { title: 'Express' });
});
  
module.exports = router;
