import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Show } from '../_entities/show.entity';
import { CitiesService } from './cities.service';

class ShowRepositoryFake {

}

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: getRepositoryToken(Show),
          useClass: ShowRepositoryFake
        }
      ],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
