import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MathModule } from './math.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(MathModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });
  await app.listen();
  logger.log('Math microservice is running...');
}
bootstrap();
