import { Injectable } from '@nestjs/common';
import { Film } from './types/Film';

@Injectable()
export class FilmService {
  async getFilmById(id: number): Promise<Film> {
    return { id };
  }

  async getFilms(): Promise<Film[]> {
    return [];
  }

  async createFilm(filmPayload: Film): Promise<Film> {
    return filmPayload;
  }

  async updateFilm(updateFilm: Film, filmId: number): Promise<Film> {
    return { ...updateFilm, id: filmId };
  }
}
