import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './movies/app.controller';

@Module({
  //a module is a part of your application
  imports: [MoviesModule],
  controllers: [AppController], // take urls and execute functions -> similar with router on Express
  providers: [],
})
export class AppModule {}
