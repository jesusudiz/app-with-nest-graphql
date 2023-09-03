import { Injectable } from '@nestjs/common';
import { CreateAuthInputDTO} from './dto/create-auth.input';
import {UpdateAuthInputDTO} from './dto/update-auth.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private productModel: Model<User>) {
  }
 async singnIn(createAuthInput: CreateAuthInputDTO) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInputDTO) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
