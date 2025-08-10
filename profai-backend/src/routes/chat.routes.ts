import { Router } from 'express';
import { createChat, sendMessage, getChatHistory } from '../controllers/chat.controller';

const router = Router();

// Route to create a new chat
router.post('/chats', createChat);

// Route to send a message in a chat
router.post('/chats/:chatId/messages', sendMessage);

// Route to get chat history
router.get('/chats/:chatId/history', getChatHistory);

export default router;