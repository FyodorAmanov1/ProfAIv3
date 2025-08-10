import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import chatRoutes from './routes/chat.routes';
import userRoutes from './routes/user.routes';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    logger.info('Database connected successfully');
})
.catch((error) => {
    logger.error('Database connection error:', error);
});

// Start server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});