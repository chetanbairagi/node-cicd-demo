import { Module } from '@nestjs/common';
import { CatController } from './controller/cat.controller';
import { CatService } from './service/cat.service';

@Module({
  providers: [CatService],
  controllers: [CatController]
})
export class CatModule {}
