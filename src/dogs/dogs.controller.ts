import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { DogDto } from './dto/dog.dto';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { GetDogsParamsDto } from './dto/get-dogs-params.dto';

@Controller()
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get('dogs')
  findAll(@Query() params: GetDogsParamsDto): Promise<DogDto[]> {
    return this.dogsService.findAll(params);
  }

  @Post('dog')
  @HttpCode(201)
  create(@Body() createDogDto: CreateDogDto): Promise<CreateDogDto> {
    return this.dogsService.create(createDogDto);
  }
}
