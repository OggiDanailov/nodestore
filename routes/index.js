var express = require('express');
var router = express.Router();
var Product = require('../models/product')

/* GET home page. */
router.get('/', function(req, res) {
	Product.find(function(err, docs){
		res.render('index', { myTitle: 'Shopping Cart', products: docs });

	});
  
});

module.exports = router;
