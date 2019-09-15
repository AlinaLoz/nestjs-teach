import { Module } from '@nestjs/common';
import { TestModule } from '../test/test.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';


@Module({
  imports: [TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
