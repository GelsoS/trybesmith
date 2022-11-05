import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/http.exception';

export default function authMiddleware(req: Request, res:Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) throw new HttpException(401, 'Token nao encontrado!');
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    throw new HttpException(401, 'Nao autorizado');
  }
}