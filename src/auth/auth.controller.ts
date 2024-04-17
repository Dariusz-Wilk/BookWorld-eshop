import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dto';
import { Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerData: RegisterDTO) {
    try {
      const newUser = await this.authService.register(registerData);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Nowy użytkownik został pomyślnie dodany.',
        data: newUser,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Wystąpił błąd podczas dodawania nowego użytkownika.',
          errorDetails: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
