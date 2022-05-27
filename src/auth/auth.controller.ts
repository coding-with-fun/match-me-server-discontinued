import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from 'src/dto/auth/signin.dto';
import { SignUpDto } from 'src/dto/auth/signup.dto';

@Controller('auth')
export class AuthController {
  @Post('/signup')
  userSignUp(@Body() signUpBody: SignUpDto): string {
    console.log(signUpBody);
    return 'User signed up successfully';
  }

  @Post('/signin')
  userSignIn(@Body() signInBody: SignInDto): string {
    console.log(signInBody);
    return 'User signed in successfully';
  }
}
