import { Injectable } from '@nestjs/common';
import { getShows } from '../_repositories/shows.repository'

@Injectable()
export class ShowsService {
    
    async getShows() {
        return await getShows()
    }

}
