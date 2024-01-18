import { Module } from '@nestjs/common';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { FilmRepository } from './film.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Film, FilmSchema } from './types/Film';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
  ],
  controllers: [FilmController],
  providers: [FilmService, FilmRepository],
})
export class FilmModule {}
