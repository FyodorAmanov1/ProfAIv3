import { ChatModel } from '../models/chat.model';

class ChatService {
    async createChat(chatData: any) {
        const chat = new ChatModel(chatData);
        return await chat.save();
    }

    async getChatById(chatId: string) {
        return await ChatModel.findById(chatId).populate('messages');
    }

    async getAllChats() {
        return await ChatModel.find().populate('messages');
    }

    async addMessageToChat(chatId: string, messageData: any) {
        const chat = await ChatModel.findById(chatId);
        if (chat) {
            chat.messages.push(messageData);
            return await chat.save();
        }
        throw new Error('Chat not found');
    }
}

export const chatService = new ChatService();