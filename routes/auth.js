const express = require("express");
const authRoutes = express.Router();

const AuthController = require('./../Controllers/AuthController')

authRoutes
  .post('/sign-up',AuthController.signUp)
  .post('/login', AuthController.login)



module.exports = authRoutes;

