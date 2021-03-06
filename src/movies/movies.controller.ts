import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { UpdateMovieDto } from './DTO/update-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for a movie made after  : ${searchingYear}`;
  //   }
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() UpdateMovieDto) {
    return this.moviesService.update(movieId, UpdateMovieDto);
  }
}
