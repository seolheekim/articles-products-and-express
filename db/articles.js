/*jshint esversion: 6 */
const collection = [];

function getAllArticles() {
  return collection;
}

function createArticle (obj) {
  if(_doesArticleExist(obj.title) === false) {
    var newArticle = {
      "title" : obj.title,
      "body" : obj.body,
      "author" : obj.author,
      "urlTitle" : encodeURI(obj.title)
    };
    // push new article to collection array
    collection.push(newArticle);
    return true;
  }
  return false;
}

function getByTitle(title) {
  for(var i = 0; i < collection.length; i++) {
    if(collection[i].title === title) {
      return collection[i];
    }
  }
  return false;
}

function deleteArticleByTitle(title) {
  if(_doesArticleExist(title)) {
    var article = getByTitle(title);
    collection.splice(collection.indexOf(article), 1);
    console.log(collection);
  }
  return false;
}

function editArticle(title, article) {
  console.log("edit");
  console.log(article);
  if(_doesArticleExist(title)) {
    var index = collection.indexOf(getByTitle(title));
    collection[index].title = article.title;
    collection[index].body = article.body;
    collection[index].author = article.author;
    collection[index].urlTitle = encodeURI(article.title);
  }
}

function _doesArticleExist(title) {
  for(var i = 0; i < collection.length; i++) {
    if(collection[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getAllArticles,
  createArticle,
  getByTitle,
  deleteArticleByTitle,
  editArticle
};