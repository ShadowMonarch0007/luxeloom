import express from 'express';
import { addMessage, listMessages, removeMessages } from '../controllers/messageController.js';
import adminAuth from '../middleware/adminAuth.js';

const messageRouter = express.Router();

messageRouter.post('/send', addMessage);
messageRouter.get('/list', adminAuth, listMessages)
messageRouter.post('/remove', adminAuth, removeMessages)


export default messageRouter;