import express from 'express';
import { addMessage, listMessages } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.post('/send', addMessage);
messageRouter.get('/list', listMessages)


export default messageRouter;