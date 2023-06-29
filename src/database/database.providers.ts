import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../dogs/dog.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: process.env.DATABASE_HOST,
        port: 1433,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });

      sequelize.addModels([Dog]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
