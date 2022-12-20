import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const secretKey = `Impesa123456&`;

console.log(secretKey);

// const password = `some-secret-password`;
// const password = `fd505804-3302-439b-8780-a4ab8f6083f8`;

const connection = {
  host: 'localhost',
  user: 'admin',
  database: 'project',
  password: 'otherpass',
  multipleStatements: true,
};

console.log(connection);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
