import { Injectable } from '@nestjs/common';
import { ITest } from './test.interface';

@Injectable()
export class AppService {

  constructor() {}
  getHello(): void {
//private readonly testService: ITest
    //console.log(this.testService.testik());
  }
}
