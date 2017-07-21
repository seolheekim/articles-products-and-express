/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const articlesDB = require('../db/articles.js');

router.route('/')
  .get((req, res) => {
    var collection = articlesDB.getAllArticles();
    res.render('articles', {collection:collection});
  })
  .post((req, res) => {
    req.setEncoding('utf8');
    if(articlesDB.createArticle(req.body)) { // SUCCESS
      var collection = articlesDB.getAllArticles();
      res.render('articles', {collection:collection});
    } else { // FAIL
      res.render('articles/new');
    }
  });

router.route('/new')
  .get((req, res) => {
    res.render('articles/new');
});

router.route('/:title')
  .get((req, res) => {
    if(articlesDB.getByTitle(req.params.title)) { //SUCCESS
      var article = articlesDB.getByTitle(req.params.title);
      res.render('articles/articles', article);
    }
  })
  .put((req, res) => {
    if(articlesDB.getByTitle(req.params.title)) { // SUCCESS
      articlesDB.editArticle(req.params.title, req.body);
      var article = articlesDB.getByTitle(req.body.title);
      res.render('articles/articles', article);
    } else { // FAIL
      //UPDATE LATER
    }
  })
  .delete((req, res) => {
    if(articlesDB.deleteArticle(req.params.title)) { // SUCCESS
      var collection = articlesDB.getAllArticles();
      res.render('articles', {collection:collection});
    } else { // FAIL
      //UPDATE LATER
    }
  });

router.route('/:title/edit')
  .get((req, res) => {
    if(articlesDB.getByTitle(req.params.title)) {
      var article = articlesDB.getByTitle(req.params.title);
      res.render('articles/edit', article);
    }

  });

module.exports = router;