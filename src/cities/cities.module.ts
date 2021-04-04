import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from '../_entities/show.entity';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
    imports: [TypeOrmModule.forFeature([Show])],
    providers: [CitiesService],
    controllers: [CitiesController]
})
export class CitiesModule {}
