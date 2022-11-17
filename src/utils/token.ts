import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export function createToken(id: number) {
  const token = jwt.sign({ id }, 'secret', { expiresIn: '10d', algorithm: 'HS256' });
  return token;
}

export function validaToken(token: string | undefined) {
  if (!token) return { status: 401, message: { message: 'Token not found' } };
  
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
    return { status: 0, id };
  } catch (error) {
    return { status: 401, message: { message: 'Invalid token' } };
  }
}