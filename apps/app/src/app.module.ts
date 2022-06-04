import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TcpModule } from './tcp.module';

@Module({
  imports: [TcpModule.register({ name: 'math' })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
