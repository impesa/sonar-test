import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGreet(): string {
    return 'Hi World!';
  }
  getOther1(): string {
    return 'Hi Other 1!';
  }
  getOther2(): string {
    return 'Hi Other 2!';
  }
  getBye(): string {
    return 'Bye World!';
  }
}
