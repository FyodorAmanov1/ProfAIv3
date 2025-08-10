// src/types/index.ts

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Chat {
    id: string;
    participants: User[];
    messages: Message[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Message {
    id: string;
    sender: User;
    content: string;
    timestamp: Date;
}