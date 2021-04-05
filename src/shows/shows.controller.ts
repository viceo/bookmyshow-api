import { Controller, Get } from '@nestjs/common';
import { ShowsService } from './shows.service'

@Controller('shows')
export class ShowsController {
    constructor(private readonly showsService: ShowsService) {}
    @Get()
    async getShows() {
        const metadata = {} //? Se puede enviar metadata además de retornar el recurso desde el controlador (ejemplo)
        const shows =  await this.showsService.getShows()
        return { shows, metadata }
    }

}
