import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express'
import { ShowsService } from './shows.service'

@Controller('shows')
export class ShowsController {
    constructor(private readonly showsService: ShowsService) { }
    @Get()
    async getShows(
        @Req() req: Request
    ) {
        const metadata = {} //? Se puede enviar metadata además de retornar el recurso desde el controlador (ejemplo)
        const shows = await this.showsService.getShows(req.query.city as string)
        return { shows, metadata }
    }

}
