import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('1')
  getHello(): string {
    return this.appService.getHello();
  }

    @Get('2')
    getHello2(): string {
        return this.appService.getHello();
    }
}
