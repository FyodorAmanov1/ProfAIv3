import { Schema, model, Document } from 'mongoose';

interface IMessage {
    sender: string;
    content: string;
    timestamp: Date;
}

interface IChat extends Document {
    participants: string[];
    messages: IMessage[];
    createdAt: Date;
    updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({
    sender: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const ChatSchema = new Schema<IChat>({
    participants: { type: [String], required: true },
    messages: { type: [MessageSchema], default: [] },
}, {
    timestamps: true
});

const ChatModel = model<IChat>('Chat', ChatSchema);

export default ChatModel;