import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGreet(): string {
    return 'Hi World!';
  }
  getOther(): string {
    return 'Hi Other!';
  }
  getBye(): string {
    return 'Bye World!';
  }
}
