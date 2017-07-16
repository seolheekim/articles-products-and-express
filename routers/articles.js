/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();

router.route('/')
  .post((req, res) => {
    req.setEncoding('utf8');
    console.log(req.body);
  });

// router.route('/articles/:title')
//   .put((req, res) => {

//   })
//   .delete((req, res) => {

//   });

module.exports = router;