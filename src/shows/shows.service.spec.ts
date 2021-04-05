import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Show } from '../_entities/show.entity';
import { ShowsService } from './shows.service';

class ShowRepositoryFake {

}

describe('ShowsService', () => {
  let service: ShowsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShowsService,
        {
          provide: getRepositoryToken(Show),
          useClass: ShowRepositoryFake
        }
      ],
    }).compile();

    service = module.get<ShowsService>(ShowsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
