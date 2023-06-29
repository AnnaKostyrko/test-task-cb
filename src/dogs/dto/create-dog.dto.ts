import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateDogDto {
  @IsNotEmpty({ message: 'The name field is required' })
  @IsString({ message: 'The name must be a string' })
  readonly name: string;

  @IsNotEmpty({ message: 'The color field is required' })
  @IsString({ message: 'The color must be a string' })
  readonly color: string;

  @IsNotEmpty({ message: 'The tail length field is required' })
  @IsNumber({}, { message: 'The tail length must be a number' })
  @Min(0, { message: 'The tail length must not be less than 0' })
  readonly tail_length: number;

  @IsNotEmpty({ message: 'The weight field is required' })
  @IsNumber({}, { message: 'The weight must be a number' })
  @Min(0, { message: 'The weight must not be less than 0' })
  readonly weight: number;
}
