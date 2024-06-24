import { DataSource, DataSourceOptions } from 'typeorm';
import { configService } from './config/config.service';

export const AppDataSource = new DataSource(configService.getTypeOrmConfig() as DataSourceOptions);
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err: Error) => {
    console.error('Error during Data Source initialization', err);
  });
