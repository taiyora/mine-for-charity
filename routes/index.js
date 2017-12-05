var express = require('express');
var router = express.Router();

website_name = 'Mine for Charity';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: website_name });
});

router.get('/faq', function(req, res, next) {
    res.render('faq', { title: website_name + ' - FAQ'});
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: website_name + ' - Contact'});
});

module.exports = router;
