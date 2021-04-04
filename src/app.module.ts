import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsController } from './shows/shows.controller';
import { ShowsService } from './shows/shows.service';
import { ShowsModule } from './shows/shows.module';
import { CitiesService } from './cities/cities.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';

const dbModule = TypeOrmModule.forRoot({
  type: 'mariadb',
  host: process.env.BMS_DB_HOST,
  port: parseInt(process.env.BMS_DB_PORT),
  username: process.env.BMS_DB_USER,
  password: process.env.BMS_DB_PASSWORD,
  database: process.env.BMS_DB_DATABASE,
  entities: [],
  synchronize: process.env.NODE_ENV === 'production' ? false : true,
})

@Module({
  imports: [dbModule, ShowsModule, CitiesModule],
  controllers: [AppController, ShowsController, CitiesController],
  providers: [AppService, ShowsService, CitiesService],
})
export class AppModule { }
