import express from 'express';
import { addMessage, listMessages } from '../controllers/messageController.js';
import adminAuth from '../middleware/adminAuth.js';

const messageRouter = express.Router();

messageRouter.post('/send', addMessage);
messageRouter.get('/list', adminAuth, listMessages)


export default messageRouter;