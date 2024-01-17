import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from './types/Film';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':filmId')
  async getFilmById(@Param('filmId') filmId: number): Promise<Film> {
    return this.filmService.getFilmById(filmId);
  }

  @Get()
  async getFilms(): Promise<Film[]> {
    return this.filmService.getFilms();
  }

  @Post()
  async createFilm(@Body() filmPayload: Film): Promise<Film> {
    return this.filmService.createFilm(filmPayload);
  }

  @Patch(':filmId')
  async updateFilm(
    @Body() updateFilm: Film,
    @Param('filmId') filmId: number,
  ): Promise<Film> {
    return this.filmService.updateFilm(updateFilm, filmId);
  }
}
