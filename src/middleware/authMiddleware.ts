import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import mongoose from 'mongoose';

export interface TokenPayload extends jwt.JwtPayload {
  id: string;
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key') as TokenPayload;

    const user = await User.findById(decoded.id).exec();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = { id: (user._id as mongoose.Types.ObjectId).toString() };

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
