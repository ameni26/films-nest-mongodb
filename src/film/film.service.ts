import { Injectable } from '@nestjs/common';
import { Film } from './types/Film';
import { FilmRepository } from './film.repository';

@Injectable()
export class FilmService {
  constructor(private readonly filmRepository: FilmRepository) {}
  async getFilmById(id: number): Promise<Film> {
    return { id };
  }

  async getFilms(): Promise<Film[]> {
    return this.filmRepository.findAll();
  }

  async createFilm(filmPayload: Film): Promise<Film> {
    console.log('filmPayload', filmPayload);
    return this.filmRepository.create(filmPayload);
  }

  async updateFilm(updateFilm: Film, filmId: number): Promise<Film> {
    return { ...updateFilm, id: filmId };
  }
}
