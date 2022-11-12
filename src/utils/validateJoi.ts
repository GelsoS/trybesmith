import Joi from 'joi';
import { LoginUsr, People, Produto } from '../interfaces/produtos';

export function VerificaLogin(body: LoginUsr) {
  const { username, password } = body;
  if (!username) return { status: 400, message: { message: '"username" is required' } };
  if (!password) return { status: 400, message: { message: '"password" is required' } };
}

export function cadastro(body: Produto) {
  const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
      'string.empty': '"name" is required',
    }),
    amount: Joi.string().min(3).required().messages({
      'string.empty': '"amount" is required',
    }),
  });
  const { error } = schema.validate(body);
  const type = error?.details[0].type;
  if (error) {
    return { status: type === 'any.required' ? 400 : 422, message: { message: error.message } };
  }
}

export function user(body: People) {
  const schema = Joi.object({
    username: Joi.string().min(3).required().messages({
      'string.empty': '"username" is required',
    }),
    classe: Joi.string().min(3).required().messages({
      'string.empty': '"classe" is required',
    }),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required().messages({
      'string.empty': '"password" is required',
    }),
  });
  const { error } = schema.validate(body);
  const type = error?.details[0].type;
  if (error) {
    return { status: type === 'any.required' ? 400 : 422, message: { message: error.message } };
  }
}