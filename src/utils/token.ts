import jwt from 'jsonwebtoken';

export default function createToken(data: string) {
  const token = jwt.sign({ data }, 'segredo', { expiresIn: '1d', algorithm: 'HS256' });
  return token;
}