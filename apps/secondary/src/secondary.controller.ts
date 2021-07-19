import { Controller, Get } from '@nestjs/common';
import { SecondaryService } from './secondary.service';

@Controller()
export class SecondaryController {
  constructor(private readonly secondaryService: SecondaryService) {}

  @Get()
  getHello(): string {
    return this.secondaryService.getHello();
  }
}
