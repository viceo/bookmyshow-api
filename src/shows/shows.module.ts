import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from '../_entities/show.entity';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';

@Module({
    imports: [TypeOrmModule.forFeature([Show])],
    providers: [ShowsService],
    controllers: [ShowsController]
})
export class ShowsModule {}
