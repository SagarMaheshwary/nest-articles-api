import { IsEmail, Length } from 'class-validator';

export class CreateUserDTO {
  id?: number;

  @Length(2, 50)
  name: string;

  @Length(5, 255)
  @IsEmail()
  email: string;

  @Length(5, 255)
  password: string;

  created_at?: Date;

  updated_at?: Date;
}
