import { Test, TestingModule } from '@nestjs/testing';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';

// https://www.gitmemory.com/issue/nestjs/nest/2309/497394128


describe('ShowsController', () => {
  let controller: ShowsController;
  let service: ShowsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowsController],
      providers: [
        {
          provide: ShowsService,
          useValue: {}
        }
      ]
    }).compile();

    controller = module.get<ShowsController>(ShowsController);
    service = module.get<ShowsService>(ShowsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
