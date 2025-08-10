import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { IUser } from '../types/index';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const registerUser = async (userData: IUser) => {
    const user = new User(userData);
    await user.save();
    return user;
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user);
    return { user, token };
};

const generateToken = (user: IUser) => {
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
};

export const validateToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};