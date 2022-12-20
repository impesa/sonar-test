import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const password = `some-secret-password`;
  console.log(password);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
