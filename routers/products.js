/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const productsDb = require('../db/products.js');

router.route('/')
  .post( (req, res) => {
    if(req.body === req.body){
      productsDb.addProducts(req.body);
      res.redirect('/products');
    }else{
      res.redirect('/products/new');
    }
  });

router.route('/:id')
  .put( (req, res) => {
    let requestId = parseInt(req.params.id);
    let editId = productsDb.productId(requestId);
    console.log("id", editId);
    res.json({'sucess' : true});
  });


module.exports = router;