/*jshint esversion: 6 */
const collection = [];

function all() {
  return collection;
}

function add (obj) {
  if(getByTitle(obj.title) === null) {
    var newArticle = {
      "title" : obj.title,
      "body" : obj.body,
      "author" : obj.author,
      "urlTitle" : encodeURI(obj.title)
    };
    // push new article to collection array
    collection.push(newArticle);
  }
}

function getByTitle(title) {
  for(var i = 0; i < collection.length; i++) {
    if(collection[i].title === title) {
      return collection[i];
    }
  }
  return null;
}

function deleteArticle(title) {
  var article = getByTitle(title);
  collection.splice(collection.indexOf(article), 1);
  console.log(collection);
}

function editByTitle() {

}

module.exports = {
  all: all,
  add: add,
  getByTitle: getByTitle,
  deleteArticle: deleteArticle,
  editByTitle: editByTitle
};