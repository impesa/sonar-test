import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const connection = {
    host: 'localhost',
    user: 'admin',
    database: 'project',

    password: 'thisismysecret',

    multipleStatements: true,
  };

  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);
  console.log(connection);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
