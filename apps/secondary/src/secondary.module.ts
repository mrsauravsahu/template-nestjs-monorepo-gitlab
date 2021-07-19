import { Module } from '@nestjs/common';
import { SecondaryController } from './secondary.controller';
import { SecondaryService } from './secondary.service';

@Module({
  imports: [],
  controllers: [SecondaryController],
  providers: [SecondaryService],
})
export class SecondaryModule {}
