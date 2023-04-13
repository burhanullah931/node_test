const express = require("express");
const auth = require('./../Middleware/auth')
const bookRouter = express.Router();


const BookController = require('./../Controllers/BookController')

bookRouter
  .use(auth)
  .route('/')
  .get(BookController.index)
  .post(BookController.store);

bookRouter 
  .use(auth)
  .route('/:id')
  .get(BookController.show)
  .patch(BookController.update)
  .delete(BookController.destroy);

module.exports = bookRouter;
