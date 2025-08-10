import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/profai',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    chatServiceUrl: process.env.CHAT_SERVICE_URL || 'http://localhost:4000',
};

export default config;