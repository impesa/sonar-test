import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGreet(): string {
    return 'Hi World!';
  }
  getBye(): string {
    return 'Bye World!';
  }
}
