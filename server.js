const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const articleRouter = require('./routers/articles.js')
const productRouter = require('./routers/products.js')
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {

});
