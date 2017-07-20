/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const articlesDB = require('../db/articles.js');

router.route('/')
  .post((req, res) => {
    req.setEncoding('utf8');
    articlesDB.add(req.body);
    console.log(articlesDB.all());
    res.json({ "success" : true }); //delete later

    //SUCCESS

    //FAIL
  });

router.route('/:title')
  .put((req, res) => {
    articlesDB.getByTitle(req.params.title);

    //SUCCESS

    //FAIL
  })
  .delete((req, res) => {
    articlesDB.deleteArticle(req.params.title);

    //SUCCESS

    //FAIL
  });



module.exports = router;