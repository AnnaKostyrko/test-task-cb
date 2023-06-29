import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GetDogsParamsDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  readonly pageNumber?: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  readonly pageSize?: number = 10;

  @IsOptional()
  @IsString()
  readonly attribute?: string = 'name';

  @IsOptional()
  @IsString()
  @IsIn(['desc', 'asc'])
  readonly order?: string = 'desc';
}
