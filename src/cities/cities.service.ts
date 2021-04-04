import { Injectable } from '@nestjs/common';
import { getCities } from '../_repositories/cities.repository'

@Injectable()
export class CitiesService {

    //? Por motivo de DEMO no se crea un catálogo de ciudades
    //? y se consultan las ciudades como fueron registradas en los shows
    async getCities() {
        //* Obtenemos ciudades de repositorio y las mapeamos a un array de strings
        return (await getCities()).map(x => x.city)
    }

}
