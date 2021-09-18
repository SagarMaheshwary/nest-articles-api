import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from 'src/modules/user/user.service';

@ValidatorConstraint()
@Injectable()
export class UniqueEmail implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {
    //
  }

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    return !Boolean(await this.userService.findByEmail(value));
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'This email is already taken.';
  }
}
