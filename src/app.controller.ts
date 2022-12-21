import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getGreet(): string {
    return this.appService.getGreet();
  }

  @Get()
  getOther(): string {
    return this.appService.getOther();
  }

  @Get()
  getBye(): string {
    return this.appService.getBye();
  }
}
