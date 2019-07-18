const Router = require('koa-router');
const books = new Router();
const booksCtrl = require('./books.cnotroller');

books.get('/', booksCtrl.list);
books.post('/', booksCtrl.create);
books.delete('/', booksCtrl.replace);
books.put('/', booksCtrl.replace);
books.patch('/', booksCtrl.update);

module.exports = books;
