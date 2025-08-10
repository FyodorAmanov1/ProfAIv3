import { Router } from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/user.controller';

const router = Router();

// Route to get user profile
router.get('/:id', getUserProfile);

// Route to update user profile
router.put('/:id', updateUserProfile);

export default router;