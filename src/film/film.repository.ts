import { Injectable } from "@nestjs/common";
import { Film } from "./types/Film";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class FilmRepository {
  constructor(@InjectModel(Film.name) private filmModel: Model<Film>) {}

  async findAll(): Promise<Film[]> {
    return this.filmModel.find().exec();
  }

  async create(film: Film) {
    const newFilm = new this.filmModel(film);
    return newFilm.save();
  }
}
