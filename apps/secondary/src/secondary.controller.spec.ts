import { Test, TestingModule } from '@nestjs/testing';
import { SecondaryController } from './secondary.controller';
import { SecondaryService } from './secondary.service';

describe('SecondaryController', () => {
  let secondaryController: SecondaryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecondaryController],
      providers: [SecondaryService],
    }).compile();

    secondaryController = app.get<SecondaryController>(SecondaryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secondaryController.getHello()).toBe('Hello World!');
    });
  });
});
