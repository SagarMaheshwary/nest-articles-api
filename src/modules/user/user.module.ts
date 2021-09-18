import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UniqueEmail } from 'src/validators/UniqueEmail';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UniqueEmail],
  exports: [UserService],
})
export class UserModule {}
