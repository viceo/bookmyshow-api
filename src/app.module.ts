import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsController } from './shows/shows.controller';
import { ShowsService } from './shows/shows.service';
import { ShowsModule } from './shows/shows.module';
import { CitiesService } from './cities/cities.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [ShowsModule, CitiesModule],
  controllers: [AppController, ShowsController, CitiesController],
  providers: [AppService, ShowsService, CitiesService],
})
export class AppModule {}
