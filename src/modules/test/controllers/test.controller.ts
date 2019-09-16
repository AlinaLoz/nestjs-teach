import { Controller, Get } from '@nestjs/common';
import {TestProvider_1} from "../services/test.provider_1";


@Controller('test')
export class TestController {

    constructor(private readonly testProvider: TestProvider_1){}

    @Get('method1')
    test() {
        console.log('heh');
        this.testProvider.test();
    }

    @Get('method2')
    test2() {
        console.log('heh');
        this.testProvider.test2();
    }

}
