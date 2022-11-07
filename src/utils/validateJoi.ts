import { LoginUsr } from '../interfaces/produtos';

export default function VerificaLogin(body: LoginUsr) {
  const { username, password } = body;
  if (!username) return { status: 400, message: { message: '"username" is required' } };
  if (!password) return { status: 400, message: { message: '"password" is required' } };
}