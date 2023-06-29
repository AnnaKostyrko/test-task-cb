// import { Optional } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'dogs',
})
export class Dog extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  name: string;

  @Column
  color: string;

  @Column
  tail_length: number;

  @Column
  weight: number;
}

// export interface DogCreationAttributes extends Optional<Dog, 'id'> {}
