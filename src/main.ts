import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const connection = {
    host: 'localhost',
    user: 'admin',
    database: 'project',
    password: 'otherpass',
    multipleStatements: true,
  };

  console.log(connection);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
