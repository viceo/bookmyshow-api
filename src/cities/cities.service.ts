import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from '../_entities/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {

    constructor(
        @InjectRepository(Show)
        private showsRepository: Repository<Show>
    ) { }
    
    //? Por motivo de DEMO no se crea un catálogo de ciudades
    //? y se consultan las ciudades como fueron registradas en los shows
    async getCities() {
        //* Obtenemos ciudades de repositorio y las mapeamos a un array de strings
        return (await this.showsRepository.find({ select: ['city'] })).map(x => x.city)
    }

}
