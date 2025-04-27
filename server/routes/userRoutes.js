import express from 'express';
import { loginUser, registerUser, adminLogin, listUsers, removeUser } from '../controllers/userController.js';
import adminAuth from '../middleware/adminAuth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.get('/list', adminAuth, listUsers)
userRouter.post('/remove', adminAuth, removeUser)

export default userRouter;