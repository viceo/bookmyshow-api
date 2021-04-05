import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service'

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService){}

    @Get()
    async getCities() {
        const metadata = {} //? Se puede enviar metadata además de retornar el recurso desde el controlador (ejemplo)
        const cities = await this.citiesService.getCities()
        return { metadata, cities }
    }
}
