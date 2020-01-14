import {Controller, Get} from '@nestjs/common';
import { AppService } from '../services/app.service';
import {ITest} from "../services/test.interface";

@Controller()
export class AppController {
  constructor(private readonly testService: ITest) {}

  @Get('1')
  getHello(): void {
//
//   /  console.log('getGello', this.testService.testik());
  }
}
