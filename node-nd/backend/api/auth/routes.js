const express = require('express');

const authRouter = express.Router();

const { registerUser } = require('./mutations/register-user');
const { getUsers } = require('./queries/get-users');
const { loginUser } = require('./mutations/login-user');

authRouter.post('/register', registerUser);
authRouter.get('/users', getUsers);
authRouter.post('/login', loginUser);

module.exports = {
  authRouter,
};
