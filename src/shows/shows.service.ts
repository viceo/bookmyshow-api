import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show, ShowRelations } from '../_entities/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowsService {

    constructor(
        @InjectRepository(Show)
        private showsRepository: Repository<Show>
    ) { }

    //? Se filtran por default los shows de Monterrey.
    getShows(city = 'Monterrey'): Promise<Show[]> {
        return this.showsRepository.find({ relations: [ShowRelations.movie], where: [{ city }] })
    }

    //? Se filtra por id
    getShowById(id) {
        return this.showsRepository.findOne({ relations: [ShowRelations.movie], where: [{ id }] })
    }

}
