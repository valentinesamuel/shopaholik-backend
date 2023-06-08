import { Controller, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  async login(@Request() req) {
    console.log('login called');
    return req;
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async protected(@Request() req) {
  //   console.log('login called');
  //   return req.user;
  // }
}
