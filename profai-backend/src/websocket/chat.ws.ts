import WebSocket from 'ws';
import { ChatService } from '../services/chat.service';

const chatService = new ChatService();
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', async (message) => {
        const data = JSON.parse(message.toString());
        
        switch (data.type) {
            case 'SEND_MESSAGE':
                const { chatId, userId, content } = data.payload;
                const newMessage = await chatService.sendMessage(chatId, userId, content);
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'NEW_MESSAGE', payload: newMessage }));
                    }
                });
                break;

            case 'JOIN_CHAT':
                // Handle user joining chat
                break;

            case 'LEAVE_CHAT':
                // Handle user leaving chat
                break;

            default:
                console.error('Unknown message type:', data.type);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

export const handleWebSocketConnection = (server) => {
    server.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request);
        });
    });
};