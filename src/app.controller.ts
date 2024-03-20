import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './resource/user/user.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) { }
  @Get('h')
  getHello(){
    return 'hello world'
  }
}
