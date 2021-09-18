import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { jsonResponse } from 'src/helpers';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dto/login-user.dto';
import { RegisterUserDTO } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    //
  }

  @Post('/register')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    return jsonResponse({
      user: await this.authService.register(registerUserDTO),
    });
  }

  @Post('/login')
  async login(@Body() loginUserDTO: LoginUserDTO, @Res() res: Response) {
    const token = await this.authService.authenticate(loginUserDTO);

    if (!token) {
      return res.status(401).json(jsonResponse({}, 'Invalid credentials!'));
    }

    return res.status(200).json(jsonResponse(token));
  }
}
