import express from 'express';

const authRouter = express.Router();

import { registerUser } from './mutations/register-user';
import { getUsers } from './queries/get-users';
import { loginUser } from './mutations/login-user';

authRouter.get('/users', getUsers);
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

export { authRouter };
