import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const secretKey = `Impesa123456&`;
const secretKey = `Impesa123456&`;

const password = `Impesa123456`;
const password = `fd505804-3302-439b-8780-a4ab8f6083f8`;

var connection = {
  host: 'localhost',
  user: 'admin',
  database: 'project',
  password: 'mypassword', // sensitive
  multipleStatements: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
