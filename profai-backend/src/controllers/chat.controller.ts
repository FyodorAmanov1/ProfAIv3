import { Request, Response } from 'express';
import ChatService from '../services/chat.service';

class ChatController {
    async createChat(req: Request, res: Response) {
        try {
            const chatData = req.body;
            const newChat = await ChatService.createChat(chatData);
            res.status(201).json(newChat);
        } catch (error) {
            res.status(500).json({ message: 'Error creating chat', error });
        }
    }

    async sendMessage(req: Request, res: Response) {
        try {
            const { chatId, message } = req.body;
            const sentMessage = await ChatService.sendMessage(chatId, message);
            res.status(200).json(sentMessage);
        } catch (error) {
            res.status(500).json({ message: 'Error sending message', error });
        }
    }

    async getChat(req: Request, res: Response) {
        try {
            const { chatId } = req.params;
            const chat = await ChatService.getChat(chatId);
            res.status(200).json(chat);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching chat', error });
        }
    }

    async getAllChats(req: Request, res: Response) {
        try {
            const chats = await ChatService.getAllChats();
            res.status(200).json(chats);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching chats', error });
        }
    }
}

export default new ChatController();