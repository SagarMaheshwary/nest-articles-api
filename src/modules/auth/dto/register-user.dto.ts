import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsEmail, Length, Validate } from 'class-validator';
import { CreateUserDTO } from 'src/modules/user/dto/create-user.dto';
import { UniqueEmail } from 'src/validators/UniqueEmail';

export class RegisterUserDTO extends PartialType(CreateUserDTO) {
  @IsDefined()
  name: string;

  @IsDefined()
  @Validate(UniqueEmail)
  email: string;

  @IsDefined()
  password: string;
}
