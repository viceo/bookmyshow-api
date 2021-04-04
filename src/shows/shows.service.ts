import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show, ShowRelations } from 'src/_entities/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowsService {

    constructor(
        @InjectRepository(Show)
        private showsRepository: Repository<Show>
    )
    {}
    
    getShows(): Promise<Show[]> {
        return this.showsRepository.find({ relations: [ShowRelations.movie] })
    }

}
