import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    //
  }

  async find(id: number) {
    return this.userRepository.findOne(id);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ email: email });
  }

  async save(createUserDTO: CreateUserDTO) {
    createUserDTO.password = await bcrypt.hash(createUserDTO.password, 10);

    return this.userRepository.save(createUserDTO);
  }

  async update() {
    //
  }

  async delete() {
    //
  }
}
