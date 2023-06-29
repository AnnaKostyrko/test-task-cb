import { Dog } from '../dog.entity';

export class DogDto {
  // id: string;
  readonly name: string;
  readonly color: string;
  readonly tail_length: number;
  readonly weight: number;
  constructor(dog: Dog) {
    // this.id = dog.id;
    this.name = dog.name;
    this.color = dog.color;
    this.tail_length = dog.tail_length;
    this.weight = dog.weight;
  }
}
