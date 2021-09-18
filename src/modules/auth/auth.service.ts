import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginUserDTO } from './dto/login-user.dto';
import { RegisterUserDTO } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    //
  }

  async register(registerUserDTO: RegisterUserDTO) {
    const user = await this.userService.save(registerUserDTO);
    return user;
  }

  async authenticate(loginUserDTO: LoginUserDTO) {
    const user = await this.userService.findByEmail(loginUserDTO.email);

    if (!user) {
      return false;
    }

    if (!(await bcrypt.compare(loginUserDTO.password, user.password))) {
      return false;
    }

    const token = await this.createJwt(user.id, user.email);

    return {
      user,
      token,
    };
  }

  async createJwt(id: number, username: string) {
    return await this.jwtService.signAsync({
      username: username,
      sub: id,
    });
  }
}
