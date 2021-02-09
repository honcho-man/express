var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'OMES: Homepage' });
});
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About OMES' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Our Services' });
});
router.get('/gallery', function(req, res, next) {
    res.render('gallery', { title: 'Gallery' });
});
router.get('/products', function(req, res, next) {
    res.render('products', { title: 'Products' });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;