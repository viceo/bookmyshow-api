import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service'

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService){}

    @Get()
    async getCities() {
        return await this.citiesService.getCities()
    }
}
