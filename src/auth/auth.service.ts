import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthInputDTO } from './dto/create-auth.dto';
import { UpdateAuthInputDTO } from './dto/update-auth.dto';
import { LoginAuthDTO } from './dto/login-auth.dto';
import { hash, compare } from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async singnIn(newUser: CreateAuthInputDTO) {
    try {
      const existingUser = await this.userModel.findOne({
        email: newUser.email,
      });
      if (existingUser) {
        throw new HttpException(
          `El correo ${newUser.email} ya se encuentra registrado puede iniciar sesion`,
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const { password } = newUser;
        const plaintoHash = await hash(password, 10);
        newUser.password = plaintoHash;
        let registerUser = await this.userModel.create(newUser);
        registerUser = await this.userModel.findOne({ email: newUser.email });
        if (registerUser) {
          return {
            email: newUser.email,
            message: `Usuario registrado con Exito`,
          };
        } else {
          throw new HttpException(
            '`Error al intentar registrar el usuario`',
            HttpStatus.CONFLICT,
          );
        }
      }
    } catch (err) {
      throw new HttpException(
        `Error en el proceso de registro: ${err.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  restartPassword() {
    return `This action returns all auth`;
  }

  async Login(UserLogin: LoginAuthDTO) {
    const findUser = await this.userModel.findOne({ email: UserLogin.email });
    if (!findUser) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const checkPassword = await compare(UserLogin.password, findUser.password);
    if (!checkPassword) throw new HttpException('Password Incorrect', 403);

    return { email: findUser.email, status: true } ;
  }

  update(id: number, updateAuthInput: UpdateAuthInputDTO) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
