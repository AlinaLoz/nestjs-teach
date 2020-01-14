import { Module } from '@nestjs/common';
// import { TestModule } from '../test/test.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

import {  Test   } from './services/test.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
      AppService,
      Test,
    ],
})
export class AppModule {}
