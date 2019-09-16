import {Inject, Injectable} from '@nestjs/common';
import echo, { Echo } from 'echojs-lib';

import { raven } from '../../../components/raven.decorator';
@Injectable()
export class TestProvider_1 {


    constructor(@Inject('ECHO') echojs: Echo) {

    }

    @raven('error')
    test() {
        //throw new Error('dasdasda');
    }

    @raven()
    test2() {
        throw new Error('dasdasda');
    }
}
