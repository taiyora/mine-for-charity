var express = require('express');
var router = express.Router();

website_name = 'Mine for Charity';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: website_name });
});

module.exports = router;
