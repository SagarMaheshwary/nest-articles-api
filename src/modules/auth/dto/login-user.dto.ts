import { PartialType } from '@nestjs/mapped-types';
import { IsDefined } from 'class-validator';
import { CreateUserDTO } from 'src/modules/user/dto/create-user.dto';

export class LoginUserDTO extends PartialType(CreateUserDTO) {
  @IsDefined()
  email: string;

  @IsDefined()
  password: string;
}
