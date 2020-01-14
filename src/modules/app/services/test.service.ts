import {Injectable} from "@nestjs/common";
import { ITest } from "./test.interface";

@Injectable()
export class Test implements ITest {
    testik() {
        return 'testik';
    }
} 
