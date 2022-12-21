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
  getOther1(): string {
    return this.appService.getOther1();
  }

  @Get()
  getOther2(): string {
    return this.appService.getOther2();
  }

  @Get()
  getBye(): string {
    return this.appService.getBye();
  }
}
