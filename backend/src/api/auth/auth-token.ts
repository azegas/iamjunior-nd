import jwt from 'jsonwebtoken';

const generateToken = (userId: string): string => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
  return token;
};

export { generateToken };
