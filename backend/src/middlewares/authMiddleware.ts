// we can use this middleware on any request, any router that needs authentication
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
    (req as any).currentUser = payload; // Casting req to any to bypass the type error
    next(); // move to the next function
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
};

export default authMiddleware;
