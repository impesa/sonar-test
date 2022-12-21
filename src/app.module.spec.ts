import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('main', () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appModule = app.get<AppModule>(AppModule);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appModule).toBeDefined();
    });
  });
});
