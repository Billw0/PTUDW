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

router.get('/woman-shop', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('woman-shop', { title: 'Express' });
});

router.get('/man-wear', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('man-wear', { title: 'Express' });
});

router.get('/children', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('children', { title: 'Express' });
});
  
router.get('/bags', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('bags', { title: 'Express' });
});
router.get('/eye-wear', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('eye-wear', { title: 'Express' });
});

router.get('/foot-wear', function(req, res, next) {
    //throw new Error('Unknown error!');
    res.render('foot-wear', { title: 'Express' });
});
module.exports = router;
