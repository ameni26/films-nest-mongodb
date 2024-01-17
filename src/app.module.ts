import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmModule } from './film/film.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
