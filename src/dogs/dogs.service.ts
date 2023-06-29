import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Dog } from './dog.entity';
import { DogDto } from './dto/dog.dto';
import { CreateDogDto } from './dto/create-dog.dto';
import { GetDogsParamsDto } from './dto/get-dogs-params.dto';

@Injectable()
export class DogsService {
  constructor(
    @Inject('DogsRepository')
    private readonly dogsRepository: typeof Dog,
  ) {}

  async findAll(params: GetDogsParamsDto): Promise<DogDto[]> {
    console.log(params);
    const dogs = await this.dogsRepository.findAll({
      order: [[params.attribute, params.order]],
      offset: (params.pageNumber - 1) * params.pageSize,
      limit: params.pageSize,
    });
    return dogs.map((dog) => new DogDto(dog));
  }

  async create(createDogDto: CreateDogDto) {
    try {
      const dog = new Dog();
      dog.name = createDogDto.name;
      dog.color = createDogDto.color;
      dog.tail_length = createDogDto.tail_length;
      dog.weight = createDogDto.weight;

      const savedDog = await dog.save();
      return new DogDto(savedDog);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
