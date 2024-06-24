const { DataSource, DataSourceOptions } = require('typeorm');
const { configService } = require('./config/config.service');

export const AppDataSource = new DataSource(configService.getTypeOrmConfig() as typeof DataSourceOptions);
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err: Error) => {
    console.error('Error during Data Source initialization', err);
  });
