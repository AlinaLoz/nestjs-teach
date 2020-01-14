import {Inject, Injectable} from '@nestjs/common';
// import echo, { Echo } from 'echojs-lib';

@Injectable()
export class TestProvider_1 {

    constructor() {

    }

    test() {
        //throw new Error('dasdasda');
    }

    test2() {
        throw new Error('dasdasda');
    }
}
