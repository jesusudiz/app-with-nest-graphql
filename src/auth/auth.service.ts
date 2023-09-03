import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthInputDTO } from './dto/create-auth.dto';
import { UpdateAuthInputDTO } from './dto/update-auth.dto';
import { hash } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async singnIn(newUser: CreateAuthInputDTO) {
    try {
      const existingUser = await this.userModel.findOne({
        email: newUser.email,
      });
      if (existingUser) {
        return {
          user: newUser.email,
          message: `El correo ${newUser.email} ya se encuentra registrado puede iniciar sesion`,
        };
      } else {
        const { password } = newUser;
        const plaintoHash = await hash(password, 10);
        newUser.password=plaintoHash;
        let registerUser = await this.userModel.create(newUser);
        registerUser = await this.userModel.findOne({ email: newUser.email });
        if (registerUser) {
          return {
            user: newUser.email,
            message: `Usuario registrado con Exito`,
          };
        } else {
          throw new Error(`Error al intentar registrar el usuario`);
        }
      }
    } catch (err) {
      throw new Error(`Error en el proceso de registro: ${err.message}`);
    }
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
