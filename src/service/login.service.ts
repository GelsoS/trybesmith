import { LoginUsr } from '../interfaces/produtos';
import LoginModel from '../models/login.model';
import createToken from '../utils/token';
import VerificaLogin from '../utils/validateJoi';

export default class LoginService {
  public loginModel = new LoginModel();

  public async Login(body: LoginUsr) {
    const rs = VerificaLogin(body);
    if (rs) return rs;

    const user = await this.loginModel.Login(body);  
      
    if (!user) return { status: 401, message: { message: 'Username or password invalid' } };
    
    const re = createToken(user.username);

    return { status: 200, message: { token: re } };
  }
}