import {Module, Scope} from '@nestjs/common';
import {EchojsModule} from "../echojs/echojs.module";
import {TestProvider_1} from "./services/test.provider_1";
import {TestProvider_2} from "./services/test.provider_2";
import echo from "echojs-lib";

@Module({
    imports: [
        EchojsModule.forRoot('wss://testnet.echo-dev.io/ws')
    ],
    providers: [
        {
            provide: "ECHO",
            scope: Scope.TRANSIENT,
            useFactory: async (...data) => {
                console.log('connect');
                await echo.connect('wss://testnet.echo-dev.io/ws');
                return echo;
            },
        },
        TestProvider_1, TestProvider_2
    ],
})
export class TestModule {}
