import {Inject, Injectable} from '@nestjs/common';
import echo, { Echo } from 'echojs-lib';

@Injectable()
export class TestProvider_1 {


    constructor(@Inject('ECHO') echojs: Echo) {

    }

}