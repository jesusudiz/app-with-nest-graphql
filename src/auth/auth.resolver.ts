import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth, AuthResponse,UserLoged } from './entities/auth.entity';
import { CreateAuthInputDTO } from './dto/create-auth.dto';
import { UpdateAuthInputDTO } from './dto/update-auth.dto';
import {LoginAuthDTO} from './dto/login-auth.dto';
@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'Register_User' })
  createAuth(@Args('createAuthInput') registerUser: CreateAuthInputDTO) {
    try {
      return this.authService.singnIn(registerUser);
    } catch (error) {
      return error.message;
    }
  }

  @Query(() => [Auth], { name: 'Restart_Password' })
  restartPassword() {
    return this.authService.restartPassword();
  }

  @Query(() => UserLoged, { name: 'Login_User' })
  Login(@Args('LoginAuthDTO', { type: () => Int }) UserLogin: LoginAuthDTO) {
    return this.authService.Login(UserLogin);
  }

  @Mutation(() => Auth, { name: 'Update_User' })
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInputDTO) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => Auth, { name: 'Delete_User' })
  removeAuth(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
