import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

// https://www.gitmemory.com/issue/nestjs/nest/2309/497394128

describe('CitiesController', () => {
  let controller: CitiesController;
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [
        {
          provide: CitiesService,
          useValue: {}
        }
      ]
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
    service = module.get<CitiesService>(CitiesService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
