/*jshint esversion: 6 */
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const articleRouter = require('./routers/articles.js');
const productRouter = require('./routers/products.js');
const PORT = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());

const hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

// routers
app.use('/articles', articleRouter);
app.use('/products', productRouter);

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
