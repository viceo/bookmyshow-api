import { Injectable } from '@nestjs/common';
import { getCities } from '../_repositories/cities.repository'

@Injectable()
export class CitiesService {

    async getCities() {
        return (await getCities()).map( x => x.city )
    }

}
