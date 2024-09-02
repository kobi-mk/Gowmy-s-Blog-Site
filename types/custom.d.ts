import { TokenPayload } from '../src/middleware/authMiddleware';

interface UserPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload; // Ensure this matches the actual token payload structure
    }
  }
}
export {};