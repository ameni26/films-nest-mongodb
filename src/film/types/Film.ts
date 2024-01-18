import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Film {
  @Prop()
  id?: number;
  @Prop()
  title?: string;
  @Prop()
  release_year?: number;
  @Prop()
  duration?: number;
  @Prop()
  rating?: number;
  @Prop()
  synopsis?: string;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
