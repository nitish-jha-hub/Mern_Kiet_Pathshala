const express = require('express');
const userController = require('../controller/userController.js');

const userRouter = express.Router();

userRouter.route('/')
    .get(userController.getAllUsers)
    .post(userController.addUser);


module.exports = userRouter;