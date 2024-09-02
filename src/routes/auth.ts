import express from 'express';
import { login, register } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';
import { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

// // Apply `protect` middleware to the protected route
// router.get('/protected', protect, (req: Request, res: Response, next: NextFunction) => {
//   if (req.user) {
//     res.json({ message: 'This is a protected route', userId: req.user.id });
//   } else {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// });

export default router;
