/*jshint esversion: 6 */
const express = require('express');
const exphbs = require('express-handlebars');
const bp = require('body-parser');
const mo = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

const articleRouter = require('./routers/articles.js');
const productRouter = require('./routers/products.js');
const hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'main'
});

// parse application/json
app.use(bp.urlencoded());

//hbs
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//method-override
app.use(mo(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// routers
app.use('/articles', articleRouter);
app.use('/products', productRouter);

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
