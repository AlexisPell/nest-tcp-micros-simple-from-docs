import { ClientProxy } from '@nestjs/microservices';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@Inject('math') private clientProxy: ClientProxy) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    const result = this.clientProxy.send<number, number[]>('add', data);
    return result;
  }
}
