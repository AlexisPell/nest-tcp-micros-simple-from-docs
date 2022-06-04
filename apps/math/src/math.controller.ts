import { MessagePattern } from '@nestjs/microservices';
import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class MathController {
  private logger = new Logger();

  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
