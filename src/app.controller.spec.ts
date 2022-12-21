import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hi World!"', () => {
      expect(appController.getGreet()).toBe('Hi World!');
    });
    it('should return "Hi Other!"', () => {
      expect(appController.getOther()).toBe('Hi Other!');
    });
    it('should return "Bye World!"', () => {
      expect(appController.getBye()).toBe('Bye World!');
    });
  });
});
